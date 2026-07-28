import json
import re

def normalize_text(text):
    text = re.sub(r'\s+', ' ', text).strip().lower()
    text = re.sub(r'[^\w\s]', '', text)
    return text

# Load existing 50 questions from questions.ts
with open("src/data/questions.ts", "r", encoding="utf-8") as f:
    ts_content = f.read()

# Extract existing questions
q_pattern = re.compile(r'{\s*id:\s*(\d+),\s*question:\s*"(.*?)",\s*options:\s*\[\s*"(.*?)",\s*"(.*?)",\s*"(.*?)",\s*"(.*?)"\s*\],\s*answer:\s*(\d+),\s*explanation:\s*"(.*?)"\s*}', re.DOTALL)

existing_questions = []
for match in q_pattern.finditer(ts_content):
    qid, qtext, opt0, opt1, opt2, opt3, ans, exp = match.groups()
    existing_questions.append({
        "question": qtext.replace('\\"', '"'),
        "options": [opt0.replace('\\"', '"'), opt1.replace('\\"', '"'), opt2.replace('\\"', '"'), opt3.replace('\\"', '"')],
        "answer": int(ans),
        "explanation": exp.replace('\\"', '"')
    })

print(f"Loaded {len(existing_questions)} existing questions.")

# Load parsed new questions
with open("scratch/parsed_questions.json", "r", encoding="utf-8") as f:
    new_questions = json.load(f)

print(f"Loaded {len(new_questions)} new parsed questions.")

seen_norm = set()
final_list = []

# First, keep all existing 50 questions to preserve user's exam code SBA301 sequence!
for q in existing_questions:
    norm = normalize_text(q["question"])
    seen_norm.add(norm)
    final_list.append(q)

# Add new unique questions
added_count = 0
for q in new_questions:
    norm = normalize_text(q["question"])
    if norm not in seen_norm and len(norm) > 5:
        seen_norm.add(norm)
        
        # Generate default Vietnamese explanation if missing
        ans_text = q["options"][q["answer"]]
        explanation = f"Đáp án chính xác là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'."
        
        # Smart custom Vietnamese explanations for common topics
        if "jsx" in norm:
            explanation = f"Đáp án đúng là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'. JSX là cú pháp mở rộng cho phép viết HTML trực tiếp trong JavaScript."
        elif "hook" in norm or "use" in norm:
            explanation = f"Đáp án đúng là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
        elif "router" in norm or "navigate" in norm or "route" in norm:
            explanation = f"Đáp án đúng là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'. React Router xử lý điều hướng trang phía client (CSR)."
        elif "spring" in norm or "annotation" in norm or "controller" in norm or "mapping" in norm:
            explanation = f"Đáp án đúng là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
        elif "mongo" in norm or "collection" in norm or "document" in norm:
            explanation = f"Đáp án đúng là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
        elif "axios" in norm or "fetch" in norm or "http" in norm or "rest" in norm:
            explanation = f"Đáp án đúng là {['A', 'B', 'C', 'D'][q['answer']]}: '{ans_text}'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."

        final_list.append({
            "question": q["question"],
            "options": q["options"],
            "answer": q["answer"],
            "explanation": explanation
        })
        added_count += 1

print(f"Total merged unique questions: {len(final_list)} (Added {added_count} new questions)")

# Write out TypeScript file
ts_output = """export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation?: string;
}

export const QUESTIONS: Question[] = [\n"""

for idx, q in enumerate(final_list, 1):
    q_str = json.dumps(q["question"], ensure_ascii=False)
    opt0 = json.dumps(q["options"][0], ensure_ascii=False)
    opt1 = json.dumps(q["options"][1], ensure_ascii=False)
    opt2 = json.dumps(q["options"][2], ensure_ascii=False)
    opt3 = json.dumps(q["options"][3], ensure_ascii=False)
    exp_str = json.dumps(q["explanation"], ensure_ascii=False)

    ts_output += f"""  {{
    id: {idx},
    question: {q_str},
    options: [
      {opt0},
      {opt1},
      {opt2},
      {opt3}
    ],
    answer: {q["answer"]},
    explanation: {exp_str}
  }}"""
    if idx < len(final_list):
        ts_output += ",\n"
    else:
        ts_output += "\n"

ts_output += "];\n"

with open("src/data/questions.ts", "w", encoding="utf-8") as f:
    f.write(ts_output)

print("Successfully updated src/data/questions.ts!")
