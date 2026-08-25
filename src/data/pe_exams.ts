import { PEExam } from './pe_types';

const hotelBookingERDSvg = `
<div class="erd-diagram-wrapper">
  <div class="erd-diagram-header">
    <div class="erd-header-title">
      <span class="erd-badge">🖼️ SƠ ĐỒ THỰC THỂ QUAN HỆ (ERD - HOTEL BOOKING SYSTEM - 8 BẢNG)</span>
      <span class="erd-hint">Đầy đủ 8 bảng CSDL thực tế: RoomType, Room, Guest, Booking, BookingDetail, BookingGuest, Service, BookingService</span>
    </div>
    <button id="btn-zoom-erd" class="btn-zoom-erd" title="Mở rộng sơ đồ ERD toàn màn hình">
      🔍 Phóng To ERD
    </button>
  </div>
  <div class="erd-svg-container">
    <svg viewBox="0 0 1000 620" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="erd-svg">
      <defs>
        <linearGradient id="grad-node" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
        </marker>
        <marker id="arrow-pink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#f472b6" />
        </marker>
        <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
        </marker>
      </defs>

      <!-- RELATIONSHIP CONNECTOR LINES -->
      <line x1="840" y1="500" x2="680" y2="500" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
      <rect x="740" y="490" width="40" height="18" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <text x="760" y="503" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <line x1="840" y1="120" x2="220" y2="120" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
      <rect x="520" y="110" width="40" height="18" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <text x="540" y="123" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <line x1="220" y1="200" x2="330" y2="200" stroke="#f472b6" stroke-width="2.5" marker-end="url(#arrow-pink)"/>
      <rect x="255" y="190" width="40" height="18" rx="4" fill="#be185d" stroke="#f472b6" stroke-width="1"/>
      <text x="275" y="203" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <line x1="560" y1="430" x2="445" y2="300" stroke="#f472b6" stroke-width="2.5" marker-end="url(#arrow-pink)"/>
      <rect x="480" y="355" width="40" height="18" rx="4" fill="#be185d" stroke="#f472b6" stroke-width="1"/>
      <text x="500" y="368" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <line x1="550" y1="200" x2="600" y2="200" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrow-amber)"/>
      <rect x="555" y="190" width="40" height="18" rx="4" fill="#d97706" stroke="#fbbf24" stroke-width="1"/>
      <text x="575" y="203" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <line x1="120" y1="360" x2="120" y2="430" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow-green)"/>
      <rect x="100" y="385" width="40" height="18" rx="4" fill="#047857" stroke="#34d399" stroke-width="1"/>
      <text x="120" y="398" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <line x1="300" y1="500" x2="220" y2="500" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow-green)"/>
      <rect x="240" y="490" width="40" height="18" rx="4" fill="#047857" stroke="#34d399" stroke-width="1"/>
      <text x="260" y="503" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="sans-serif">1 : N</text>

      <!-- ENTITY BOXES -->
      <g transform="translate(20, 30)">
        <rect width="200" height="330" rx="8" fill="url(#grad-node)" stroke="#7e22ce" stroke-width="2.5"/>
        <rect width="200" height="28" rx="8" fill="#7e22ce"/>
        <text x="100" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">Booking</text>
        <text x="10" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 BookingID (INT)</text>
        <text x="10" y="65" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 GuestID (FK)</text>
        <text x="10" y="85" fill="#f1f5f9" font-size="10" font-family="monospace">   BookingDate (DATETIME)</text>
        <text x="10" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   CheckInDate (DATE)</text>
        <text x="10" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   CheckOutDate (DATE)</text>
        <text x="10" y="145" fill="#f1f5f9" font-size="10" font-family="monospace">   Status (VARCHAR)</text>
        <text x="10" y="165" fill="#f1f5f9" font-size="10" font-family="monospace">   TotalAmount (DECIMAL)</text>
        <text x="10" y="185" fill="#f1f5f9" font-size="10" font-family="monospace">   PaymentDate (DATETIME)</text>
        <text x="10" y="205" fill="#f1f5f9" font-size="10" font-family="monospace">   PaymentMethod (VARCHAR)</text>
        <text x="10" y="225" fill="#f1f5f9" font-size="10" font-family="monospace">   PaymentStatus (VARCHAR)</text>
        <text x="10" y="245" fill="#f1f5f9" font-size="10" font-family="monospace">   Notes (VARCHAR)</text>
      </g>

      <g transform="translate(330, 110)">
        <rect width="220" height="190" rx="8" fill="url(#grad-node)" stroke="#be185d" stroke-width="2.5"/>
        <rect width="220" height="28" rx="8" fill="#be185d"/>
        <text x="110" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">BookingDetail</text>
        <text x="10" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 DetailID (INT)</text>
        <text x="10" y="65" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 BookingID (FK)</text>
        <text x="10" y="85" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 RoomID (FK)</text>
        <text x="10" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   PricePerNight (DECIMAL)</text>
        <text x="10" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   NumNights (INTEGER)</text>
        <text x="10" y="145" fill="#f1f5f9" font-size="10" font-family="monospace">   SubTotal (DECIMAL)</text>
      </g>

      <g transform="translate(600, 110)">
        <rect width="220" height="150" rx="8" fill="url(#grad-node)" stroke="#d97706" stroke-width="2.5"/>
        <rect width="220" height="28" rx="8" fill="#d97706"/>
        <text x="110" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">BookingGuest</text>
        <text x="10" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 BookingGuestID (INT)</text>
        <text x="10" y="65" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 DetailID (FK)</text>
        <text x="10" y="85" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 GuestID (FK)</text>
        <text x="10" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   IsPrimaryGuest (BIT)</text>
      </g>

      <g transform="translate(840, 30)">
        <rect width="150" height="270" rx="8" fill="url(#grad-node)" stroke="#0284c7" stroke-width="2.5"/>
        <rect width="150" height="28" rx="8" fill="#0284c7"/>
        <text x="75" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">Guest</text>
        <text x="8" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 GuestID (INT)</text>
        <text x="8" y="65" fill="#f1f5f9" font-size="10" font-family="monospace">   FirstName</text>
        <text x="8" y="85" fill="#f1f5f9" font-size="10" font-family="monospace">   LastName</text>
        <text x="8" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   Email</text>
        <text x="8" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   Phone</text>
        <text x="8" y="145" fill="#f1f5f9" font-size="10" font-family="monospace">   NationalID</text>
        <text x="8" y="165" fill="#f1f5f9" font-size="10" font-family="monospace">   Nationality</text>
        <text x="8" y="185" fill="#f1f5f9" font-size="10" font-family="monospace">   DateOfBirth</text>
        <text x="8" y="205" fill="#f1f5f9" font-size="10" font-family="monospace">   CreatedAt</text>
      </g>

      <g transform="translate(20, 430)">
        <rect width="200" height="160" rx="8" fill="url(#grad-node)" stroke="#047857" stroke-width="2.5"/>
        <rect width="200" height="28" rx="8" fill="#047857"/>
        <text x="100" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">BookingService</text>
        <text x="10" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 BookingServiceID (INT)</text>
        <text x="10" y="65" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 BookingID (FK)</text>
        <text x="10" y="85" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 ServiceID (FK)</text>
        <text x="10" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   Quantity (INTEGER)</text>
        <text x="10" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   ServiceDate (DATE)</text>
        <text x="10" y="145" fill="#f1f5f9" font-size="10" font-family="monospace">   TotalCost (DECIMAL)</text>
      </g>

      <g transform="translate(300, 430)">
        <rect width="180" height="150" rx="8" fill="url(#grad-node)" stroke="#047857" stroke-width="2.5"/>
        <rect width="180" height="28" rx="8" fill="#047857"/>
        <text x="90" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">Service</text>
        <text x="10" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 ServiceID (INT)</text>
        <text x="10" y="65" fill="#f1f5f9" font-size="10" font-family="monospace">   ServiceName</text>
        <text x="10" y="85" fill="#f1f5f9" font-size="10" font-family="monospace">   Category</text>
        <text x="10" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   UnitPrice (DECIMAL)</text>
        <text x="10" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   Unit (VARCHAR)</text>
      </g>

      <g transform="translate(530, 430)">
        <rect width="150" height="150" rx="8" fill="url(#grad-node)" stroke="#0284c7" stroke-width="2.5"/>
        <rect width="150" height="28" rx="8" fill="#0284c7"/>
        <text x="75" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">Room</text>
        <text x="8" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 RoomID (INT)</text>
        <text x="8" y="65" fill="#f1f5f9" font-size="10" font-family="monospace">   RoomNumber</text>
        <text x="8" y="85" fill="#38bdf8" font-weight="bold" font-size="10" font-family="monospace">🔗 RoomTypeID (FK)</text>
        <text x="8" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   Floor</text>
        <text x="8" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   Status</text>
      </g>

      <g transform="translate(840, 430)">
        <rect width="150" height="150" rx="8" fill="url(#grad-node)" stroke="#0284c7" stroke-width="2.5"/>
        <rect width="150" height="28" rx="8" fill="#0284c7"/>
        <text x="75" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">RoomType</text>
        <text x="8" y="45" fill="#fbbf24" font-weight="bold" font-size="10" font-family="monospace">🔑 RoomTypeID (INT)</text>
        <text x="8" y="65" fill="#f1f5f9" font-size="10" font-family="monospace">   TypeName</text>
        <text x="8" y="85" fill="#f1f5f9" font-size="10" font-family="monospace">   Description</text>
        <text x="8" y="105" fill="#f1f5f9" font-size="10" font-family="monospace">   BasePrice</text>
        <text x="8" y="125" fill="#f1f5f9" font-size="10" font-family="monospace">   MaxOccupancy</text>
      </g>
    </svg>
  </div>
</div>
`;

const hotelSchemaDetails = [
  {
    tableName: 'RoomType',
    description: 'Bảng thông tin loại phòng khách sạn',
    columns: [
      { name: 'RoomTypeID', type: 'INT', isPk: true },
      { name: 'TypeName', type: 'VARCHAR(50)' },
      { name: 'Description', type: 'VARCHAR(255)' },
      { name: 'BasePrice', type: 'DECIMAL(10,2)' },
      { name: 'MaxOccupancy', type: 'TINYINT' }
    ]
  },
  {
    tableName: 'Room',
    description: 'Bảng thông tin phòng',
    columns: [
      { name: 'RoomID', type: 'INT', isPk: true },
      { name: 'RoomNumber', type: 'VARCHAR(10)' },
      { name: 'RoomTypeID', type: 'INT', isFk: true, fkRef: 'RoomType(RoomTypeID)' },
      { name: 'Floor', type: 'TINYINT' },
      { name: 'Status', type: 'VARCHAR(20)' }
    ]
  },
  {
    tableName: 'Guest',
    description: 'Bảng thông tin khách hàng',
    columns: [
      { name: 'GuestID', type: 'INT', isPk: true },
      { name: 'FirstName', type: 'VARCHAR(50)' },
      { name: 'LastName', type: 'VARCHAR(50)' },
      { name: 'Email', type: 'VARCHAR(100)' },
      { name: 'Phone', type: 'VARCHAR(20)' },
      { name: 'NationalID', type: 'VARCHAR(30)' },
      { name: 'Nationality', type: 'VARCHAR(50)' },
      { name: 'DateOfBirth', type: 'DATE' },
      { name: 'CreatedAt', type: 'DATETIME' }
    ]
  },
  {
    tableName: 'Booking',
    description: 'Bảng đơn đặt phòng',
    columns: [
      { name: 'BookingID', type: 'INT', isPk: true },
      { name: 'GuestID', type: 'INT', isFk: true, fkRef: 'Guest(GuestID)' },
      { name: 'BookingDate', type: 'DATETIME' },
      { name: 'CheckInDate', type: 'DATE' },
      { name: 'CheckOutDate', type: 'DATE' },
      { name: 'Status', type: 'VARCHAR(20)' },
      { name: 'TotalAmount', type: 'DECIMAL(10,2)' },
      { name: 'PaymentDate', type: 'DATETIME' },
      { name: 'PaymentMethod', type: 'VARCHAR(30)' },
      { name: 'PaymentStatus', type: 'VARCHAR(20)' },
      { name: 'Notes', type: 'VARCHAR(500)' }
    ]
  },
  {
    tableName: 'BookingDetail',
    description: 'Bảng chi tiết phòng đặt',
    columns: [
      { name: 'DetailID', type: 'INT', isPk: true },
      { name: 'BookingID', type: 'INT', isFk: true, fkRef: 'Booking(BookingID)' },
      { name: 'RoomID', type: 'INT', isFk: true, fkRef: 'Room(RoomID)' },
      { name: 'PricePerNight', type: 'DECIMAL(10,2)' },
      { name: 'NumNights', type: 'SMALLINT' },
      { name: 'SubTotal', type: 'DECIMAL(10,2)' }
    ]
  },
  {
    tableName: 'BookingGuest',
    description: 'Bảng danh sách khách lưu trú trong từng phòng',
    columns: [
      { name: 'BookingGuestID', type: 'INT', isPk: true },
      { name: 'DetailID', type: 'INT', isFk: true, fkRef: 'BookingDetail(DetailID)' },
      { name: 'GuestID', type: 'INT', isFk: true, fkRef: 'Guest(GuestID)' },
      { name: 'IsPrimaryGuest', type: 'BIT' }
    ]
  },
  {
    tableName: 'Service',
    description: 'Bảng danh mục dịch vụ khách sạn',
    columns: [
      { name: 'ServiceID', type: 'INT', isPk: true },
      { name: 'ServiceName', type: 'VARCHAR(100)' },
      { name: 'Category', type: 'VARCHAR(50)' },
      { name: 'UnitPrice', type: 'DECIMAL(10,2)' },
      { name: 'Unit', type: 'VARCHAR(30)' }
    ]
  },
  {
    tableName: 'BookingService',
    description: 'Bảng dịch vụ sử dụng trong đơn đặt phòng',
    columns: [
      { name: 'BookingServiceID', type: 'INT', isPk: true },
      { name: 'BookingID', type: 'INT', isFk: true, fkRef: 'Booking(BookingID)' },
      { name: 'ServiceID', type: 'INT', isFk: true, fkRef: 'Service(ServiceID)' },
      { name: 'Quantity', type: 'SMALLINT' },
      { name: 'ServiceDate', type: 'DATE' },
      { name: 'TotalCost', type: 'DECIMAL(10,2)' }
    ]
  }
];

export const PE_EXAMS: PEExam[] = [
  // ==================== EXAM 1 ====================
  {
    id: 'pe_exam1',
    code: 'DBI202_PE_SU2026_HOTEL_1',
    title: 'PE DBI202 - Đề 1 (Summer 2026)',
    subtitle: 'Hotel Booking System • Mã Đề 1',
    description: 'Đề thi thực hành PE SQL chuẩn FPT Summer 2026 (Bộ đề 1) với CSDL Hotel Booking 8 bảng, Chen ERD Thư viện, JOIN, GROUP BY, Subqueries, Stored Procedure & UPDATE.',
    icon: '🏨',
    badgeClass: 'badge-db',
    themeColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #818cf8 100%)',
    erdDiagramHtml: hotelBookingERDSvg,
    schemaDetails: hotelSchemaDetails,
    dbScript: `-- ============================================================
-- 1. RoomType
-- ============================================================
CREATE TABLE RoomType (
    RoomTypeID   INT            PRIMARY KEY,
    TypeName     VARCHAR(50)   NOT NULL UNIQUE,
    Description  VARCHAR(255)  NULL,
    BasePrice    DECIMAL(10,2) NOT NULL CHECK (BasePrice > 0),
    MaxOccupancy INTEGER       NOT NULL CHECK (MaxOccupancy BETWEEN 1 AND 10)
);
-- ============================================================
-- 2. Room
-- ============================================================
CREATE TABLE Room (
    RoomID     INT          PRIMARY KEY,
    RoomNumber VARCHAR(10) NOT NULL UNIQUE,
    RoomTypeID INT         NOT NULL,
    Floor      INTEGER     NOT NULL CHECK (Floor >= 1),
    Status     VARCHAR(20) NOT NULL DEFAULT 'Available'
                           CHECK (Status IN ('Available','Occupied','Maintenance','Reserved')),
    FOREIGN KEY (RoomTypeID) REFERENCES RoomType(RoomTypeID)
);
-- ============================================================
-- 3. Guest
-- ============================================================
CREATE TABLE Guest (
    GuestID     INT            PRIMARY KEY,
    FirstName   VARCHAR(50)   NOT NULL,
    LastName    VARCHAR(50)   NOT NULL,
    Email       VARCHAR(100)  NOT NULL UNIQUE,
    Phone       VARCHAR(20)   NULL,
    NationalID  VARCHAR(30)   NULL UNIQUE,
    Nationality VARCHAR(50)   NULL,
    DateOfBirth DATE          NULL,
    CreatedAt   TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- ============================================================
-- 4. Booking
-- ============================================================
CREATE TABLE Booking (
    BookingID    INT            PRIMARY KEY,
    GuestID      INT           NOT NULL,
    BookingDate  TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CheckInDate  DATE          NOT NULL,
    CheckOutDate DATE          NOT NULL,
    Status       VARCHAR(20)   NOT NULL DEFAULT 'Confirmed'
                               CHECK (Status IN ('Confirmed','Checked-In','Checked-Out','Cancelled','No-Show')),
    TotalAmount  DECIMAL(10,2) NOT NULL DEFAULT 0,
	PaymentDate datetime NULL DEFAULT CURRENT_TIMESTAMP,
	PaymentMethod varchar(30) NULL CHECK (PaymentMethod IN ('Cash','Credit Card','Debit Card','Bank Transfer','Online')),
	PaymentStatus varchar(20) NULL DEFAULT 'Completed'
                                CHECK (PaymentStatus IN ('Completed','Pending','Refunded','Failed')),
    Notes        VARCHAR(500)  NULL,
    FOREIGN KEY (GuestID) REFERENCES Guest(GuestID),
    CHECK (CheckOutDate > CheckInDate)
);
-- ============================================================
-- 5. BookingDetail  (1-3 rooms per booking)
-- ============================================================
CREATE TABLE BookingDetail (
    DetailID      INT            PRIMARY KEY,
    BookingID     INT           NOT NULL,
    RoomID        INT           NOT NULL,
    PricePerNight DECIMAL(10,2) NOT NULL CHECK (PricePerNight > 0),
    NumNights     INTEGER      NOT NULL CHECK (NumNights > 0),
    SubTotal DECIMAL(10,2) GENERATED ALWAYS AS (PricePerNight * NumNights) STORED,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (RoomID)    REFERENCES Room(RoomID),
    UNIQUE (BookingID, RoomID)
);
-- ============================================================
-- 6. BookingGuest  (1-4 occupants per BookingDetail)
-- ============================================================
CREATE TABLE BookingGuest (
    BookingGuestID  INT           PRIMARY KEY,
    DetailID        INT          NOT NULL,
    GuestID         INT          NOT NULL,
    IsPrimaryGuest  INTEGER          NOT NULL DEFAULT 0,
    FOREIGN KEY (DetailID) REFERENCES BookingDetail(DetailID),
    FOREIGN KEY (GuestID)  REFERENCES Guest(GuestID),
    UNIQUE (DetailID, GuestID)
);
-- ============================================================
-- 7. Service
-- ============================================================
CREATE TABLE Service (
    ServiceID   INT            PRIMARY KEY,
    ServiceName VARCHAR(100)  NOT NULL UNIQUE,
    Category    VARCHAR(50)   NOT NULL,
    UnitPrice   DECIMAL(10,2) NOT NULL CHECK (UnitPrice >= 0),
    Unit        VARCHAR(30)   NOT NULL DEFAULT 'per use'
);
-- ============================================================
-- 8. BookingService  (0-4 services per booking)
-- ============================================================
CREATE TABLE BookingService (
    BookingServiceID INT       PRIMARY KEY,
    BookingID        INT      NOT NULL,
    ServiceID        INT      NOT NULL,
    Quantity         INTEGER NOT NULL DEFAULT 1 CHECK (Quantity > 0),
    ServiceDate      DATE     NOT NULL DEFAULT CURRENT_DATE,
    TotalCost        DECIMAL(10,2) NULL,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
);
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (1, 'Alice', 'Nguyen', 'alice.nguyen1@email.com', '0900000001', 'NID0001', 'Vietnamese', '1970-01-01', '2023-12-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (2, 'Bob', 'Smith', 'bob.smith2@email.com', '0900000002', 'NID0002', 'American', '1981-08-14', '2023-12-25 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (3, 'Chen', 'Wei', 'chen.wei3@email.com', '0900000003', 'NID0003', 'Chinese', '1992-03-27', '2024-03-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (4, 'Maria', 'Garcia', 'maria.garcia4@email.com', '0900000004', 'NID0004', 'Spanish', '2003-10-12', '2024-02-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (5, 'Hiroshi', 'Tanaka', 'hiroshi.tanaka5@email.com', '0900000005', 'NID0005', 'Japanese', '1979-05-25', '2024-05-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (6, 'Linh', 'Tran', 'linh.tran6@email.com', '0900000006', 'NID0006', 'Vietnamese', '1990-12-10', '2024-05-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (7, 'James', 'Wilson', 'james.wilson7@email.com', '0900000007', 'NID0007', 'British', '2001-07-23', '2024-07-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (8, 'Sophie', 'Pham', 'sophie.pham8@email.com', '0900000008', 'NID0008', 'Vietnamese', '1977-02-08', '2024-02-14 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (9, 'Linda', 'Le', 'linda.le9@email.com', '0900000009', 'NID0009', 'Chinese', '1988-09-21', '2024-02-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (10, 'Carlos', 'Rodriguez', 'carlos.rodriguez10@email.com', '0900000010', 'NID0010', 'Spanish', '1999-04-06', '2024-03-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (11, 'Yuki', 'Suzuki', 'yuki.suzuki11@email.com', '0900000011', 'NID0011', 'Japanese', '1975-11-19', '2024-10-26 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (12, 'Emily', 'Johnson', 'emily.johnson12@email.com', '0900000012', 'NID0012', 'American', '1986-06-04', '2024-05-28 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (13, 'David', 'Brown', 'david.brown13@email.com', '0900000013', 'NID0013', 'British', '1997-01-17', '2023-12-30 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (14, 'Sarah', 'Martinez', 'sarah.martinez14@email.com', '0900000014', 'NID0014', 'Spanish', '1973-08-02', '2024-08-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (15, 'Ahmed', 'Ali', 'ahmed.ali15@email.com', '0900000015', 'NID0015', 'Egyptian', '1984-03-15', '2024-03-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (16, 'Fatima', 'Hassan', 'fatima.hassan16@email.com', '0900000016', 'NID0016', 'Egyptian', '1995-10-28', '2024-10-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (17, 'Pierre', 'Dupont', 'pierre.dupont17@email.com', '0900000017', 'NID0017', 'French', '1971-05-13', '2024-05-21 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (18, 'Isabelle', 'Laurent', 'isabelle.laurent18@email.com', '0900000018', 'NID0018', 'French', '1982-12-26', '2023-12-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (19, 'Nguyen', 'Hoang', 'nguyen.hoang19@email.com', '0900000019', 'NID0019', 'Vietnamese', '1993-07-11', '2024-07-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (20, 'Tran', 'Dao', 'tran.dao20@email.com', '0900000020', 'NID0020', 'Vietnamese', '2004-02-24', '2024-03-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (21, 'Michael', 'Johnson', 'michael.johnson21@email.com', '0900000021', 'NID0021', 'American', '1980-09-09', '2024-10-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (22, 'Anna', 'Kovacs', 'anna.kovacs22@email.com', '0900000022', 'NID0022', 'Hungarian', '1991-04-22', '2024-05-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (23, 'Ravi', 'Sharma', 'ravi.sharma23@email.com', '0900000023', 'NID0023', 'Indian', '2002-11-07', '2024-12-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (24, 'Priya', 'Patel', 'priya.patel24@email.com', '0900000024', 'NID0024', 'Indian', '1978-06-20', '2024-07-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (25, 'Lars', 'Eriksson', 'lars.eriksson25@email.com', '0900000025', 'NID0025', 'Swedish', '1989-01-05', '2024-02-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (26, 'Astrid', 'Hansen', 'astrid.hansen26@email.com', '0900000026', 'NID0026', 'Norwegian', '2000-08-18', '2024-08-20 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (27, 'Omar', 'Ibrahim', 'omar.ibrahim27@email.com', '0900000027', 'NID0027', 'Jordanian', '1976-03-03', '2024-03-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (28, 'Layla', 'Mansour', 'layla.mansour28@email.com', '0900000028', 'NID0028', 'Lebanese', '1987-10-16', '2024-10-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (29, 'Marco', 'Rossi', 'marco.rossi29@email.com', '0900000029', 'NID0029', 'Italian', '1998-05-01', '2024-06-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (30, 'Giulia', 'Ferrari', 'giulia.ferrari30@email.com', '0900000030', 'NID0030', 'Italian', '1974-12-14', '2024-01-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (31, 'Kenji', 'Yamamoto', 'kenji.yamamoto31@email.com', '0900000031', 'NID0031', 'Japanese', '1985-07-27', '2024-08-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (32, 'Sakura', 'Nakamura', 'sakura.nakamura32@email.com', '0900000032', 'NID0032', 'Japanese', '1996-02-12', '2024-03-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (33, 'Hassan', 'Al-Farsi', 'hassan.al-farsi33@email.com', '0900000033', 'NID0033', 'Omani', '1972-09-25', '2024-10-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (34, 'Amira', 'Khalil', 'amira.khalil34@email.com', '0900000034', 'NID0034', 'Jordanian', '1983-04-10', '2024-05-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (35, 'Luke', 'Anderson', 'luke.anderson35@email.com', '0900000035', 'NID0035', 'Australian', '1994-11-23', '2023-12-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (36, 'Emma', 'Thomas', 'emma.thomas36@email.com', '0900000036', 'NID0036', 'British', '1970-06-08', '2024-07-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (37, 'Ivan', 'Petrov', 'ivan.petrov37@email.com', '0900000037', 'NID0037', 'Russian', '1981-01-21', '2024-02-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (38, 'Natasha', 'Ivanova', 'natasha.ivanova38@email.com', '0900000038', 'NID0038', 'Russian', '1992-08-06', '2024-10-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (39, 'Wei', 'Liu', 'wei.liu39@email.com', '0900000039', 'NID0039', 'Chinese', '2003-03-19', '2024-05-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (40, 'Mei', 'Zhang', 'mei.zhang40@email.com', '0900000040', 'NID0040', 'Chinese', '1979-10-04', '2024-12-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (41, 'Thomas', 'Mueller', 'thomas.mueller41@email.com', '0900000041', 'NID0041', 'German', '1990-05-17', '2024-07-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (42, 'Claire', 'Wagner', 'claire.wagner42@email.com', '0900000042', 'NID0042', 'German', '2001-12-02', '2024-02-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (43, 'Alex', 'Taylor', 'alex.taylor43@email.com', '0900000043', 'NID0043', 'Australian', '1977-07-15', '2024-09-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (44, 'Jordan', 'Morgan', 'jordan.morgan44@email.com', '0900000044', 'NID0044', 'British', '1988-02-28', '2024-04-03 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (45, 'Sam', 'Davis', 'sam.davis45@email.com', '0900000045', 'NID0045', 'American', '1999-09-13', '2024-11-05 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (46, 'Taylor', 'Robinson', 'taylor.robinson46@email.com', '0900000046', 'NID0046', 'British', '1975-04-26', '2024-06-07 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (47, 'Lee', 'Park', 'lee.park47@email.com', '0900000047', 'NID0047', 'Korean', '1986-11-11', '2024-01-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (48, 'Kim', 'Choi', 'kim.choi48@email.com', '0900000048', 'NID0048', 'Korean', '1997-06-24', '2024-08-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (49, 'Raj', 'Singh', 'raj.singh49@email.com', '0900000049', 'NID0049', 'Indian', '1973-01-09', '2024-03-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (50, 'Aisha', 'Osei', 'aisha.osei50@email.com', '0900000050', 'NID0050', 'Ghanaian', '1984-08-22', '2024-10-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (51, 'Aisha', 'Osaki', 'aisha.osaki51@email.com', '0978900050', 'NID0051', 'Japanese', '1990-08-22', '2024-11-15 00:00:00');
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (1, 'Standard', 'Cozy room with basic amenities', CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (2, 'Deluxe', 'Spacious room with city or garden view', CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (3, 'Suite', 'Luxury suite with living area and minibar', CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (4, 'Family', 'Large room with two queen beds', CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (5, 'Penthouse', 'Top-floor suite with panoramic view and pool', CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (1, 'Breakfast Buffet', 'Food & Beverage', CAST(15.00 AS Decimal(10, 2)), 'per person per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (2, 'Breakfast Room Service', 'Food & Beverage', CAST(10.00 AS Decimal(10, 2)), 'per order');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (3, 'Airport Transfer', 'Transport', CAST(25.00 AS Decimal(10, 2)), 'per trip');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (4, 'Laundry Service', 'Housekeeping', CAST(8.00 AS Decimal(10, 2)), 'per bag');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (5, 'Spa & Massage', 'Wellness', CAST(50.00 AS Decimal(10, 2)), 'per session');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (6, 'Mini Bar Refill', 'Food & Beverage', CAST(20.00 AS Decimal(10, 2)), 'per refill');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (7, 'Parking', 'Transport', CAST(5.00 AS Decimal(10, 2)), 'per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (8, 'Swimming Pool', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (9, 'Gym Access', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (10, 'Business Center', 'Business', CAST(10.00 AS Decimal(10, 2)), 'per hour');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (1, '101', 1, 1, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (2, '102', 1, 1, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (3, '201', 1, 2, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (4, '202', 1, 2, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (5, '301', 1, 3, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (6, '302', 1, 3, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (7, '401', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (8, '402', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (9, '403', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (10, '404', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (11, '501', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (12, '502', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (13, '503', 2, 5, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (14, '504', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (15, '601', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (16, '602', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (17, '603', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (18, '604', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (19, '605', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (20, '606', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (21, '701', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (22, '702', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (23, '703', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (24, '704', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (25, '705', 4, 7, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (26, '706', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (27, '801', 5, 8, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (28, '802', 5, 8, 'Maintenance');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (29, '803', 5, 8, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (30, '804', 5, 8, 'Available');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (1, 1, '2023-12-31 00:00:00', '2024-01-01', '2024-01-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-01-02 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (2, 1, '2024-08-02 00:00:00', '2024-08-04', '2024-08-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-08-06 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (3, 1, '2024-03-04 00:00:00', '2024-03-07', '2024-03-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-03-10 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (4, 1, '2024-10-06 00:00:00', '2024-10-10', '2024-10-14', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-10-14 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (5, 2, '2024-05-08 00:00:00', '2024-05-13', '2024-05-18', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-05-18 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (6, 2, '2024-12-10 00:00:00', '2024-12-16', '2024-12-22', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-12-22 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (7, 2, '2024-07-12 00:00:00', '2024-07-19', '2024-07-26', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-07-26 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (8, 2, '2024-02-14 00:00:00', '2024-02-22', '2024-02-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-02-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (9, 3, '2024-09-16 00:00:00', '2024-09-25', '2024-09-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-09-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (10, 3, '2024-03-24 00:00:00', '2024-04-03', '2024-04-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-04-06 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (11, 3, '2024-10-26 00:00:00', '2024-11-06', '2024-11-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-10 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (12, 3, '2024-05-28 00:00:00', '2024-06-09', '2024-06-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-14 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (13, 4, '2023-12-30 00:00:00', '2024-01-12', '2024-01-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-18 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (14, 4, '2024-08-01 00:00:00', '2024-08-15', '2024-08-22', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-08-22 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (15, 4, '2024-03-17 00:00:00', '2024-03-18', '2024-03-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (16, 4, '2024-10-19 00:00:00', '2024-10-21', '2024-10-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-10-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (17, 5, '2024-05-21 00:00:00', '2024-05-24', '2024-05-27', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-05-27 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (18, 5, '2023-12-29 00:00:00', '2024-01-02', '2024-01-06', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-01-06 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (19, 5, '2024-07-31 00:00:00', '2024-08-05', '2024-08-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-08-10 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (20, 5, '2024-03-02 00:00:00', '2024-03-08', '2024-03-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-03-14 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (21, 6, '2024-10-04 00:00:00', '2024-10-11', '2024-10-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-10-18 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (22, 6, '2024-05-06 00:00:00', '2024-05-14', '2024-05-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-05-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (23, 6, '2024-12-08 00:00:00', '2024-12-17', '2024-12-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-12-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (24, 6, '2024-07-10 00:00:00', '2024-07-20', '2024-07-23', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-07-23 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (25, 7, '2024-02-12 00:00:00', '2024-02-23', '2024-02-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-02-27 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (26, 7, '2024-08-20 00:00:00', '2024-09-01', '2024-09-06', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-06 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (27, 7, '2024-03-22 00:00:00', '2024-04-04', '2024-04-10', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-10 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (28, 7, '2024-10-24 00:00:00', '2024-11-07', '2024-11-14', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-14 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (29, 8, '2024-06-09 00:00:00', '2024-06-10', '2024-06-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (30, 8, '2024-01-11 00:00:00', '2024-01-13', '2024-01-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (31, 8, '2024-08-13 00:00:00', '2024-08-16', '2024-08-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-08-19 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (32, 8, '2024-03-15 00:00:00', '2024-03-19', '2024-03-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-03-23 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (33, 9, '2024-10-17 00:00:00', '2024-10-22', '2024-10-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-10-27 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (34, 9, '2024-05-19 00:00:00', '2024-05-25', '2024-05-31', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-05-31 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (35, 9, '2023-12-27 00:00:00', '2024-01-03', '2024-01-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-01-10 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (36, 10, '2024-07-29 00:00:00', '2024-08-06', '2024-08-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-08-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (37, 10, '2024-02-29 00:00:00', '2024-03-09', '2024-03-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-03-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (38, 10, '2024-10-02 00:00:00', '2024-10-12', '2024-10-15', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-10-15 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (39, 11, '2024-05-04 00:00:00', '2024-05-15', '2024-05-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-05-19 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (40, 11, '2024-12-06 00:00:00', '2024-12-18', '2024-12-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-12-23 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (41, 11, '2024-07-08 00:00:00', '2024-07-21', '2024-07-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-27 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (42, 12, '2024-02-10 00:00:00', '2024-02-24', '2024-03-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-02 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (43, 12, '2024-09-01 00:00:00', '2024-09-02', '2024-09-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-03 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (44, 12, '2024-04-03 00:00:00', '2024-04-05', '2024-04-07', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-07 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (45, 13, '2024-11-05 00:00:00', '2024-11-08', '2024-11-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-11 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (46, 13, '2024-06-07 00:00:00', '2024-06-11', '2024-06-15', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-06-15 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (47, 13, '2024-01-09 00:00:00', '2024-01-14', '2024-01-19', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-01-19 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (48, 14, '2024-08-11 00:00:00', '2024-08-17', '2024-08-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-08-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (49, 14, '2024-03-13 00:00:00', '2024-03-20', '2024-03-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-03-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (50, 14, '2024-10-15 00:00:00', '2024-10-23', '2024-10-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-10-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (51, 15, '2024-05-23 00:00:00', '2024-06-01', '2024-06-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-06-03 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (52, 15, '2023-12-25 00:00:00', '2024-01-04', '2024-01-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-01-07 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (53, 15, '2024-07-27 00:00:00', '2024-08-07', '2024-08-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-08-11 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (54, 16, '2024-02-27 00:00:00', '2024-03-10', '2024-03-15', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-03-15 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (55, 16, '2024-09-30 00:00:00', '2024-10-13', '2024-10-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-10-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (56, 16, '2024-05-02 00:00:00', '2024-05-16', '2024-05-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-05-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (57, 17, '2024-12-18 00:00:00', '2024-12-19', '2024-12-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-12-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (58, 17, '2024-07-20 00:00:00', '2024-07-22', '2024-07-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (59, 17, '2024-02-22 00:00:00', '2024-02-25', '2024-02-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-02-28 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (60, 18, '2024-08-30 00:00:00', '2024-09-03', '2024-09-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-07 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (61, 18, '2025-04-01 00:00:00', '2025-04-06', '2025-04-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-04-11 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (62, 18, '2025-11-03 00:00:00', '2025-11-09', '2025-11-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-11-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (63, 19, '2025-06-05 00:00:00', '2025-06-12', '2025-06-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-06-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (64, 19, '2025-01-07 00:00:00', '2025-01-15', '2025-01-16', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-01-16 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (65, 20, '2025-08-09 00:00:00', '2025-08-18', '2025-08-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-08-20 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (66, 20, '2025-03-11 00:00:00', '2025-03-21', '2025-03-24', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-03-24 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (67, 21, '2025-10-13 00:00:00', '2025-10-24', '2025-10-28', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-10-28 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (68, 21, '2025-05-21 00:00:00', '2025-06-02', '2025-06-07', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-06-07 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (69, 22, '2024-12-23 00:00:00', '2025-01-05', '2025-01-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-01-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (70, 22, '2025-07-25 00:00:00', '2025-08-08', '2025-08-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-08-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (71, 23, '2025-03-10 00:00:00', '2025-03-11', '2025-03-12', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-12 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (72, 23, '2025-10-12 00:00:00', '2025-10-14', '2025-10-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-16 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (73, 24, '2025-05-14 00:00:00', '2025-05-17', '2025-05-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-20 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (74, 24, '2025-12-16 00:00:00', '2025-12-20', '2025-12-24', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-12-24 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (75, 25, '2025-07-18 00:00:00', '2025-07-23', '2025-07-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-07-28 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (76, 25, '2025-01-26 00:00:00', '2025-02-01', '2025-02-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-02-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (77, 26, '2025-08-28 00:00:00', '2025-09-04', '2025-09-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-09-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (78, 26, '2025-03-30 00:00:00', '2025-04-07', '2025-04-08', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-04-08 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (79, 27, '2025-11-01 00:00:00', '2025-11-10', '2025-11-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-11-12 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (80, 27, '2025-06-03 00:00:00', '2025-06-13', '2025-06-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-06-16 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (81, 28, '2025-01-05 00:00:00', '2025-01-16', '2025-01-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-01-20 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (82, 28, '2025-08-07 00:00:00', '2025-08-19', '2025-08-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-08-24 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (83, 29, '2025-03-09 00:00:00', '2025-03-22', '2025-03-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-03-28 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (84, 30, '2025-10-11 00:00:00', '2025-10-25', '2025-11-01', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-11-01 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (85, 31, '2025-06-02 00:00:00', '2025-06-03', '2025-06-04', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-06-04 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (86, 32, '2025-01-04 00:00:00', '2025-01-06', '2025-01-08', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-01-08 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (87, 33, '2025-08-06 00:00:00', '2025-08-09', '2025-08-12', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-08-12 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (88, 34, '2025-03-08 00:00:00', '2025-03-12', '2025-03-16', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-16 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (89, 35, '2025-10-10 00:00:00', '2025-10-15', '2025-10-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-20 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (90, 36, '2025-05-12 00:00:00', '2025-05-18', '2025-05-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (91, 37, '2025-12-14 00:00:00', '2025-12-21', '2025-12-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-12-28 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (92, 38, '2025-07-16 00:00:00', '2025-07-24', '2025-07-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-07-25 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (93, 39, '2025-01-24 00:00:00', '2025-02-02', '2025-02-04', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-02-04 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (94, 40, '2025-08-26 00:00:00', '2025-09-05', '2025-09-08', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-09-08 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (95, 41, '2025-03-28 00:00:00', '2025-04-08', '2025-04-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-04-12 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (96, 42, '2025-10-30 00:00:00', '2025-11-11', '2025-11-16', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-11-16 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (97, 43, '2025-06-01 00:00:00', '2025-06-14', '2025-06-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-06-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (98, 44, '2025-01-03 00:00:00', '2025-01-17', '2025-01-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-01-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (99, 45, '2025-08-19 00:00:00', '2025-08-20', '2025-08-21', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-08-21 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (100, 46, '2025-03-21 00:00:00', '2025-03-23', '2025-03-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-03-25 00:00:00', 'Cash', 'Completed');
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (1, 1, 1, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (2, 1, 2, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (3, 2, 3, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (4, 2, 4, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (5, 2, 5, CAST(96.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (6, 3, 6, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (7, 4, 7, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (8, 4, 8, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (9, 5, 9, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (10, 5, 10, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (11, 5, 11, CAST(180.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (12, 6, 12, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (13, 7, 13, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (14, 7, 14, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (15, 8, 15, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (16, 8, 16, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (17, 8, 17, CAST(360.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (18, 9, 18, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (19, 10, 19, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (20, 10, 20, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (21, 11, 21, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (22, 11, 22, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (23, 11, 23, CAST(240.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (24, 12, 24, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (25, 13, 25, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (26, 13, 26, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (27, 14, 27, CAST(600.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (28, 14, 28, CAST(660.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (29, 14, 29, CAST(720.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (30, 15, 30, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (31, 16, 1, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (32, 16, 2, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (33, 17, 3, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (34, 17, 4, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (35, 17, 5, CAST(96.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (36, 18, 6, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (37, 19, 7, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (38, 19, 8, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (39, 20, 9, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (40, 20, 10, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (41, 20, 11, CAST(180.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (42, 21, 12, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (43, 22, 13, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (44, 22, 14, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (45, 23, 15, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (46, 23, 16, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (47, 23, 17, CAST(360.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (48, 24, 18, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (49, 25, 19, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (50, 25, 20, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (51, 26, 21, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (52, 26, 22, CAST(220.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (53, 26, 23, CAST(240.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (54, 27, 24, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (55, 28, 25, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (56, 28, 26, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (57, 29, 27, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (58, 29, 28, CAST(660.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (59, 29, 29, CAST(720.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (60, 30, 30, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (61, 31, 1, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (62, 31, 2, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (63, 32, 3, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (64, 32, 4, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (65, 32, 5, CAST(96.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (66, 33, 6, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (67, 34, 7, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (68, 34, 8, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (69, 35, 9, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (70, 35, 10, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (71, 35, 11, CAST(180.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (72, 36, 12, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (73, 37, 13, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (74, 37, 14, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (75, 38, 15, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (76, 38, 16, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (77, 38, 17, CAST(360.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (78, 39, 18, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (79, 40, 19, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (80, 40, 20, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (81, 41, 21, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (82, 41, 22, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (83, 41, 23, CAST(240.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (84, 42, 24, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (85, 43, 25, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (86, 43, 26, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (87, 44, 27, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (88, 44, 28, CAST(660.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (89, 44, 29, CAST(720.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (90, 45, 30, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (91, 46, 1, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (92, 46, 2, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (93, 47, 3, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (94, 47, 4, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (95, 47, 5, CAST(96.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (96, 48, 6, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (97, 49, 7, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (98, 49, 8, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (99, 50, 9, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (100, 50, 10, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (101, 50, 11, CAST(180.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (102, 51, 12, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (103, 52, 13, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (104, 52, 14, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (105, 53, 15, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (106, 53, 16, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (107, 53, 17, CAST(360.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (108, 54, 18, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (109, 55, 19, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (110, 55, 20, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (111, 56, 21, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (112, 56, 22, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (113, 56, 23, CAST(240.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (114, 57, 24, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (115, 58, 25, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (116, 58, 26, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (117, 59, 27, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (118, 59, 28, CAST(660.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (119, 59, 29, CAST(720.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (120, 60, 30, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (121, 61, 1, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (122, 61, 2, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (123, 62, 3, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (124, 62, 4, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (125, 62, 5, CAST(96.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (126, 63, 6, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (127, 64, 7, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (128, 64, 8, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (129, 65, 9, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (130, 65, 10, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (131, 65, 11, CAST(180.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (132, 66, 12, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (133, 67, 13, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (134, 67, 14, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (135, 68, 15, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (136, 68, 16, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (137, 68, 17, CAST(360.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (138, 69, 18, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (139, 70, 19, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (140, 70, 20, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (141, 71, 21, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (142, 71, 22, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (143, 71, 23, CAST(240.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (144, 72, 24, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (145, 73, 25, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (146, 73, 26, CAST(220.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (147, 74, 27, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (148, 74, 28, CAST(660.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (149, 74, 29, CAST(720.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (150, 75, 30, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (151, 76, 1, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (152, 76, 2, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (153, 77, 3, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (154, 77, 4, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (155, 77, 5, CAST(96.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (156, 78, 6, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (157, 79, 7, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (158, 79, 8, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (159, 80, 9, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (160, 80, 10, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (161, 80, 11, CAST(180.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (162, 81, 12, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (163, 82, 13, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (164, 82, 14, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (165, 83, 15, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (166, 83, 16, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (167, 83, 17, CAST(360.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (168, 84, 18, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (169, 85, 19, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (170, 85, 20, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (171, 86, 21, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (172, 86, 22, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (173, 86, 23, CAST(240.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (174, 87, 24, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (175, 88, 25, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (176, 88, 26, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (177, 89, 27, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (178, 89, 28, CAST(660.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (179, 89, 29, CAST(720.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (180, 90, 30, CAST(600.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (181, 91, 1, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (182, 91, 2, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (183, 92, 3, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (184, 92, 4, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (185, 92, 5, CAST(96.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (186, 93, 6, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (187, 94, 7, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (188, 94, 8, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (189, 95, 9, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (190, 95, 10, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (191, 95, 11, CAST(180.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (192, 96, 12, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (193, 97, 13, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (194, 97, 14, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (195, 98, 15, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (196, 98, 16, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (197, 98, 17, CAST(360.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (198, 99, 18, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (199, 100, 19, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (200, 100, 20, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (1, 1, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (2, 1, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (3, 2, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (4, 2, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (5, 3, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (6, 3, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (7, 4, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (8, 5, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (9, 5, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (10, 6, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (11, 6, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (12, 7, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (13, 7, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (14, 8, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (15, 9, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (16, 9, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (17, 10, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (18, 10, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (19, 11, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (20, 11, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (21, 12, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (22, 13, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (23, 13, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (24, 14, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (25, 14, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (26, 15, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (27, 15, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (28, 15, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (29, 15, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (30, 16, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (31, 17, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (32, 17, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (33, 18, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (34, 18, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (35, 18, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (36, 19, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (37, 19, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (38, 19, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (39, 19, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (40, 20, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (41, 21, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (42, 21, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (43, 22, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (44, 22, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (45, 22, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (46, 23, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (47, 23, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (48, 23, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (49, 23, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (50, 24, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (51, 25, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (52, 25, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (53, 26, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (54, 26, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (55, 26, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (56, 27, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (57, 27, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (58, 27, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (59, 27, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (60, 28, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (61, 29, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (62, 29, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (63, 30, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (64, 30, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (65, 30, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (66, 31, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (67, 31, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (68, 32, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (69, 33, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (70, 33, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (71, 34, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (72, 34, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (73, 35, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (74, 35, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (75, 36, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (76, 37, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (77, 37, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (78, 38, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (79, 38, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (80, 39, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (81, 39, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (82, 40, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (83, 41, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (84, 41, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (85, 42, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (86, 42, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (87, 43, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (88, 43, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (89, 44, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (90, 45, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (91, 45, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (92, 46, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (93, 46, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (94, 46, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (95, 47, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (96, 47, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (97, 47, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (98, 47, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (99, 48, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (100, 49, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (101, 49, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (102, 50, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (103, 50, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (104, 50, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (105, 51, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (106, 51, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (107, 51, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (108, 51, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (109, 52, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (110, 53, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (111, 53, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (112, 54, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (113, 54, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (114, 54, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (115, 55, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (116, 55, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (117, 55, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (118, 55, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (119, 56, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (120, 57, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (121, 57, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (122, 58, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (123, 58, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (124, 58, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (125, 59, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (126, 59, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (127, 59, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (128, 59, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (129, 60, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (130, 61, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (131, 61, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (132, 62, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (133, 62, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (134, 63, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (135, 63, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (136, 64, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (137, 65, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (138, 65, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (139, 66, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (140, 66, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (141, 67, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (142, 67, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (143, 68, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (144, 69, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (145, 69, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (146, 70, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (147, 70, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (148, 71, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (149, 71, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (150, 72, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (151, 73, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (152, 73, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (153, 74, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (154, 74, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (155, 75, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (156, 75, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (157, 75, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (158, 75, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (159, 76, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (160, 77, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (161, 77, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (162, 78, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (163, 78, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (164, 78, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (165, 79, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (166, 79, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (167, 79, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (168, 79, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (169, 80, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (170, 81, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (171, 81, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (172, 82, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (173, 82, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (174, 82, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (175, 83, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (176, 83, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (177, 83, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (178, 83, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (179, 84, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (180, 85, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (181, 85, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (182, 86, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (183, 86, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (184, 86, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (185, 87, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (186, 87, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (187, 87, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (188, 87, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (189, 88, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (190, 89, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (191, 89, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (192, 90, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (193, 90, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (194, 90, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (195, 91, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (196, 91, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (197, 92, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (198, 93, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (199, 93, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (200, 94, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (201, 94, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (202, 95, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (203, 95, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (204, 96, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (205, 97, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (206, 97, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (207, 98, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (208, 98, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (209, 99, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (210, 99, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (211, 100, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (212, 101, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (213, 101, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (214, 102, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (215, 102, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (216, 103, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (217, 103, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (218, 104, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (219, 105, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (220, 105, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (221, 106, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (222, 106, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (223, 106, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (224, 107, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (225, 107, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (226, 107, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (227, 107, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (228, 108, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (229, 109, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (230, 109, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (231, 110, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (232, 110, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (233, 110, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (234, 111, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (235, 111, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (236, 111, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (237, 111, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (238, 112, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (239, 113, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (240, 113, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (241, 114, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (242, 114, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (243, 114, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (244, 115, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (245, 115, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (246, 115, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (247, 115, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (248, 116, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (249, 117, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (250, 117, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (251, 118, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (252, 118, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (253, 118, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (254, 119, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (255, 119, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (256, 119, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (257, 119, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (258, 120, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (259, 121, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (260, 121, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (261, 122, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (262, 122, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (263, 123, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (264, 123, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (265, 124, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (266, 125, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (267, 125, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (268, 126, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (269, 126, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (270, 127, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (271, 127, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (272, 128, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (273, 129, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (274, 129, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (275, 130, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (276, 130, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (277, 131, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (278, 131, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (279, 132, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (280, 133, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (281, 133, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (282, 134, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (283, 134, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (284, 135, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (285, 135, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (286, 135, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (287, 135, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (288, 136, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (289, 137, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (290, 137, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (291, 138, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (292, 138, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (293, 138, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (294, 139, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (295, 139, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (296, 139, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (297, 139, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (298, 140, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (299, 141, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (300, 141, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (301, 142, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (302, 142, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (303, 142, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (304, 143, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (305, 143, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (306, 143, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (307, 143, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (308, 144, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (309, 145, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (310, 145, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (311, 146, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (312, 146, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (313, 146, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (314, 147, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (315, 147, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (316, 147, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (317, 147, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (318, 148, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (319, 149, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (320, 149, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (321, 150, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (322, 150, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (323, 150, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (324, 151, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (325, 151, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (326, 152, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (327, 153, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (328, 153, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (329, 154, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (330, 154, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (331, 155, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (332, 155, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (333, 156, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (334, 157, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (335, 157, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (336, 158, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (337, 158, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (338, 159, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (339, 159, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (340, 160, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (341, 161, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (342, 161, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (343, 162, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (344, 162, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (345, 163, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (346, 163, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (347, 164, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (348, 165, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (349, 165, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (350, 166, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (351, 166, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (352, 166, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (353, 167, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (354, 167, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (355, 167, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (356, 167, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (357, 168, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (358, 169, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (359, 169, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (360, 170, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (361, 170, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (362, 170, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (363, 171, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (364, 171, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (365, 171, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (366, 171, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (367, 172, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (368, 173, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (369, 173, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (370, 174, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (371, 174, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (372, 174, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (373, 175, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (374, 175, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (375, 175, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (376, 175, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (377, 176, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (378, 177, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (379, 177, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (380, 178, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (381, 178, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (382, 178, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (383, 179, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (384, 179, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (385, 179, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (386, 179, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (387, 180, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (388, 181, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (389, 181, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (390, 182, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (391, 182, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (392, 183, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (393, 183, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (394, 184, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (395, 185, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (396, 185, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (397, 186, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (398, 186, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (399, 187, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (400, 187, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (401, 188, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (402, 189, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (403, 189, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (404, 190, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (405, 190, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (406, 191, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (407, 191, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (408, 192, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (409, 193, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (410, 193, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (411, 194, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (412, 194, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (413, 195, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (414, 195, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (415, 195, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (416, 195, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (417, 196, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (418, 197, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (419, 197, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (420, 198, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (421, 198, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (422, 198, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (423, 199, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (424, 199, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (425, 199, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (426, 199, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (427, 200, 2, 0);
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (1, 1, 4, 1, '2024-01-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (2, 2, 7, 1, '2024-08-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (3, 2, 4, 2, '2024-08-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (4, 3, 10, 1, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (5, 3, 7, 2, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (6, 3, 4, 3, '2024-03-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (7, 4, 3, 1, '2024-10-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (8, 4, 10, 2, '2024-10-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (9, 4, 7, 3, '2024-10-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (10, 4, 4, 1, '2024-10-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (11, 6, 9, 1, '2024-12-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (12, 7, 2, 1, '2024-07-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (13, 7, 9, 2, '2024-07-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (14, 8, 5, 1, '2024-02-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (15, 8, 2, 2, '2024-02-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (16, 8, 9, 3, '2024-02-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (17, 9, 8, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (18, 9, 5, 2, '2024-09-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (19, 9, 2, 3, '2024-09-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (20, 9, 9, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (21, 11, 4, 1, '2024-11-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (22, 12, 7, 1, '2024-06-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (23, 12, 4, 2, '2024-06-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (24, 13, 10, 1, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (25, 13, 7, 2, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (26, 13, 4, 3, '2024-01-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (27, 14, 3, 1, '2024-08-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (28, 14, 10, 2, '2024-08-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (29, 14, 7, 3, '2024-08-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (30, 14, 4, 1, '2024-08-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (31, 16, 9, 1, '2024-10-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (32, 17, 2, 1, '2024-05-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (33, 17, 9, 2, '2024-05-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (34, 18, 5, 1, '2024-01-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (35, 18, 2, 2, '2024-01-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (36, 18, 9, 3, '2024-01-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (37, 19, 8, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (38, 19, 5, 2, '2024-08-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (39, 19, 2, 3, '2024-08-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (40, 19, 9, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (41, 21, 4, 1, '2024-10-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (42, 22, 7, 1, '2024-05-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (43, 22, 4, 2, '2024-05-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (44, 23, 10, 1, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (45, 23, 7, 2, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (46, 23, 4, 3, '2024-12-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (47, 24, 3, 1, '2024-07-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (48, 24, 10, 2, '2024-07-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (49, 24, 7, 3, '2024-07-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (50, 24, 4, 1, '2024-07-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (51, 26, 9, 1, '2024-09-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (52, 27, 2, 1, '2024-04-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (53, 27, 9, 2, '2024-04-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (54, 28, 5, 1, '2024-11-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (55, 28, 2, 2, '2024-11-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (56, 28, 9, 3, '2024-11-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (57, 29, 8, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (58, 29, 5, 2, '2024-06-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (59, 29, 2, 3, '2024-06-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (60, 29, 9, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (61, 31, 4, 1, '2024-08-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (62, 32, 7, 1, '2024-03-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (63, 32, 4, 2, '2024-03-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (64, 33, 10, 1, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (65, 33, 7, 2, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (66, 33, 4, 3, '2024-10-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (67, 34, 3, 1, '2024-05-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (68, 34, 10, 2, '2024-05-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (69, 34, 7, 3, '2024-05-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (70, 34, 4, 1, '2024-05-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (71, 36, 9, 1, '2024-08-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (72, 37, 2, 1, '2024-03-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (73, 37, 9, 2, '2024-03-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (74, 38, 5, 1, '2024-10-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (75, 38, 2, 2, '2024-10-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (76, 38, 9, 3, '2024-10-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (77, 39, 8, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (78, 39, 5, 2, '2024-05-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (79, 39, 2, 3, '2024-05-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (80, 39, 9, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (81, 41, 4, 1, '2024-07-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (82, 42, 7, 1, '2024-02-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (83, 42, 4, 2, '2024-02-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (84, 43, 10, 1, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (85, 43, 7, 2, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (86, 43, 4, 3, '2024-09-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (87, 44, 3, 1, '2024-04-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (88, 44, 10, 2, '2024-04-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (89, 44, 7, 3, '2024-04-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (90, 44, 4, 1, '2024-04-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (91, 46, 9, 1, '2024-06-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (92, 47, 2, 1, '2024-01-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (93, 47, 9, 2, '2024-01-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (94, 48, 5, 1, '2024-08-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (95, 48, 2, 2, '2024-08-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (96, 48, 9, 3, '2024-08-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (97, 49, 8, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (98, 49, 5, 2, '2024-03-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (99, 49, 2, 3, '2024-03-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (100, 49, 9, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (101, 51, 4, 1, '2024-06-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (102, 52, 7, 1, '2024-01-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (103, 52, 4, 2, '2024-01-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (104, 53, 10, 1, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (105, 53, 7, 2, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (106, 53, 4, 3, '2024-08-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (107, 54, 3, 1, '2024-03-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (108, 54, 10, 2, '2024-03-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (109, 54, 7, 3, '2024-03-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (110, 54, 4, 1, '2024-03-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (111, 56, 9, 1, '2024-05-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (112, 57, 2, 1, '2024-12-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (113, 57, 9, 2, '2024-12-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (114, 58, 5, 1, '2024-07-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (115, 58, 2, 2, '2024-07-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (116, 58, 9, 3, '2024-07-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (117, 59, 8, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (118, 59, 5, 2, '2024-02-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (119, 59, 2, 3, '2024-02-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (120, 59, 9, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (121, 61, 4, 1, '2025-04-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (122, 62, 7, 1, '2025-11-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (123, 62, 4, 2, '2025-11-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (124, 63, 10, 1, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (125, 63, 7, 2, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (126, 63, 4, 3, '2025-06-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (127, 64, 3, 1, '2025-01-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (128, 64, 10, 2, '2025-01-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (129, 64, 7, 3, '2025-01-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (130, 64, 4, 1, '2025-01-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (131, 66, 9, 1, '2025-03-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (132, 67, 2, 1, '2025-10-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (133, 67, 9, 2, '2025-10-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (134, 68, 5, 1, '2025-06-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (135, 68, 2, 2, '2025-06-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (136, 68, 9, 3, '2025-06-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (137, 69, 8, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (138, 69, 5, 2, '2025-01-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (139, 69, 2, 3, '2025-01-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (140, 69, 9, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (141, 71, 4, 1, '2025-03-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (142, 72, 7, 1, '2025-10-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (143, 72, 4, 2, '2025-10-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (144, 73, 10, 1, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (145, 73, 7, 2, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (146, 73, 4, 3, '2025-05-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (147, 74, 3, 1, '2025-12-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (148, 74, 10, 2, '2025-12-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (149, 74, 7, 3, '2025-12-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (150, 74, 4, 1, '2025-12-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (151, 76, 9, 1, '2025-02-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (152, 77, 2, 1, '2025-09-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (153, 77, 9, 2, '2025-09-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (154, 78, 5, 1, '2025-04-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (155, 78, 2, 2, '2025-04-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (156, 78, 9, 3, '2025-04-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (157, 79, 8, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (158, 79, 5, 2, '2025-11-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (159, 79, 2, 3, '2025-11-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (160, 79, 9, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (161, 81, 4, 1, '2025-01-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (162, 82, 7, 1, '2025-08-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (163, 82, 4, 2, '2025-08-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (164, 83, 10, 1, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (165, 83, 7, 2, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (166, 83, 4, 3, '2025-03-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (167, 84, 3, 1, '2025-10-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (168, 84, 10, 2, '2025-10-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (169, 84, 7, 3, '2025-10-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (170, 84, 4, 1, '2025-10-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (171, 86, 9, 1, '2025-01-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (172, 87, 2, 1, '2025-08-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (173, 87, 9, 2, '2025-08-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (174, 88, 5, 1, '2025-03-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (175, 88, 2, 2, '2025-03-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (176, 88, 9, 3, '2025-03-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (177, 89, 8, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (178, 89, 5, 2, '2025-10-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (179, 89, 2, 3, '2025-10-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (180, 89, 9, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (181, 91, 4, 1, '2025-12-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (182, 92, 7, 1, '2025-07-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (183, 92, 4, 2, '2025-07-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (184, 93, 10, 1, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (185, 93, 7, 2, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (186, 93, 4, 3, '2025-02-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (187, 94, 3, 1, '2025-09-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (188, 94, 10, 2, '2025-09-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (189, 94, 7, 3, '2025-09-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (190, 94, 4, 1, '2025-09-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (191, 96, 9, 1, '2025-11-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (192, 97, 2, 1, '2025-06-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (193, 97, 9, 2, '2025-06-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (194, 98, 5, 1, '2025-01-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (195, 98, 2, 2, '2025-01-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (196, 98, 9, 3, '2025-01-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (197, 99, 8, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (198, 99, 5, 2, '2025-08-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (199, 99, 2, 3, '2025-08-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (200, 99, 9, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));`,
    questions: [
      {
        id: 1,
        title: "Question 1: Create a database and tables derived from ERD (Chen Notation)",
        description: "Create a database, then write SQL statements to create all tables derived from the ERD (Library Management System: Members, MembersPhone, Librarian, Books, Loans).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Members (\n    memberID INT PRIMARY KEY,\n    firstName NVARCHAR(50),\n    lastName NVARCHAR(50)\n);",
        solutionSQL: `CREATE TABLE Members (\n    memberID INT PRIMARY KEY,\n    firstName NVARCHAR(50),\n    lastName NVARCHAR(50)\n);\n\nCREATE TABLE MembersPhone (\n    memberID INT,\n    phone NVARCHAR(20),\n    PRIMARY KEY (memberID, phone),\n    FOREIGN KEY (memberID) REFERENCES Members(memberID)\n);\n\nCREATE TABLE Librarian (\n    librarianID INT PRIMARY KEY,\n    name NVARCHAR(100)\n);\n\nCREATE TABLE Books (\n    bookCode NVARCHAR(20) PRIMARY KEY,\n    author NVARCHAR(60),\n    title NVARCHAR(100)\n);\n\nCREATE TABLE Loans (\n    memberID INT,\n    librarianID INT,\n    bookCode NVARCHAR(20),\n    borrowDate DATE,\n    returnDate DATE,\n    PRIMARY KEY (memberID, bookCode, borrowDate),\n    FOREIGN KEY (memberID) REFERENCES Members(memberID),\n    FOREIGN KEY (librarianID) REFERENCES Librarian(librarianID),\n    FOREIGN KEY (bookCode) REFERENCES Books(bookCode)\n);`
      },
      {
        id: 2,
        title: "Question 2: Select all services with unit price between 10 and 30",
        description: "Write an SQL query to display all services whose unit price is between 10 and 30 (inclusive).",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT ServiceID, ServiceName, Category, UnitPrice, Unit FROM Service WHERE UnitPrice BETWEEN 10 AND 30 ORDER BY ServiceID;"
      },
      {
        id: 3,
        title: "Question 3: Bookings by Chinese or Japanese guests in 2024",
        description: "Write an SQL query to display BookingID, GuestName, Nationality, BookingDate, DetailID, and RoomNumber for all bookings with a BookingDate in 2024 by Chinese or Japanese guests.",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT b.BookingID, g.FirstName || ' ' || g.LastName AS GuestName, g.Nationality, b.BookingDate, bd.DetailID, r.RoomNumber FROM Booking b JOIN Guest g ON b.GuestID = g.GuestID JOIN BookingDetail bd ON b.BookingID = bd.BookingID JOIN Room r ON bd.RoomID = r.RoomID WHERE g.Nationality IN ('Chinese', 'Japanese') AND strftime('%Y', b.BookingDate) = '2024' ORDER BY b.BookingID, bd.DetailID;"
      },
      {
        id: 4,
        title: "Question 4: Japanese guests and their booked services (with NULLs)",
        description: "Write an SQL query to display GuestID, FirstName, LastName, BookingID, BookingDate, ServiceName, Category, and ServiceDate for all Japanese guests. Sort by ServiceName ASC, BookingDate DESC.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT g.GuestID, g.FirstName, g.LastName, b.BookingID, b.BookingDate, s.ServiceName, s.Category, bs.ServiceDate FROM Guest g LEFT JOIN Booking b ON g.GuestID = b.GuestID LEFT JOIN BookingService bs ON b.BookingID = bs.BookingID LEFT JOIN Service s ON bs.ServiceID = s.ServiceID WHERE g.Nationality = 'Japanese' ORDER BY s.ServiceName ASC, b.BookingDate DESC;"
      },
      {
        id: 5,
        title: "Question 5: Room type performance report in January 2024",
        description: "Write a SQL query to generate a report showing RoomTypeID, TypeName, TotalBookings, TotalRevenue, and AveragePricePerNight for January 2024. Sort by TotalRevenue DESC, TypeName ASC.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT rt.RoomTypeID, rt.TypeName, COUNT(DISTINCT b.BookingID) AS TotalBookings, ROUND(COALESCE(SUM(bd.SubTotal), 0.00), 2) AS TotalRevenue, ROUND(CASE WHEN SUM(bd.NumNights) > 0 THEN CAST(SUM(bd.SubTotal) AS FLOAT) / SUM(bd.NumNights) ELSE 0.00 END, 2) AS AveragePricePerNight FROM RoomType rt LEFT JOIN Room r ON rt.RoomTypeID = r.RoomTypeID LEFT JOIN BookingDetail bd ON r.RoomID = bd.RoomID LEFT JOIN Booking b ON bd.BookingID = b.BookingID AND strftime('%Y-%m', b.CheckInDate) = '2024-01' GROUP BY rt.RoomTypeID, rt.TypeName ORDER BY TotalRevenue DESC, rt.TypeName ASC;"
      },
      {
        id: 6,
        title: "Question 6: Summary of booking activity by guest nationality",
        description: "Write a SQL query to generate a report: Nationality, NumberOfGuests, MinBookingsPerGuest, and MaxBookingsPerGuest. Sort by Nationality ASC.",
        initialCode: "-- Question 6: Write your SQL query here\nSELECT ",
        solutionSQL: "WITH GuestBookings AS (SELECT g.GuestID, g.Nationality, COUNT(b.BookingID) AS BookingCount FROM Guest g LEFT JOIN Booking b ON g.GuestID = b.GuestID GROUP BY g.GuestID, g.Nationality) SELECT Nationality, COUNT(GuestID) AS NumberOfGuests, MIN(BookingCount) AS MinBookingsPerGuest, MAX(BookingCount) AS MaxBookingsPerGuest FROM GuestBookings GROUP BY Nationality ORDER BY Nationality ASC;"
      },
      {
        id: 7,
        title: "Question 7: Guest with highest total revenue for each nationality in 2024",
        description: "Write an SQL query to find the guest(s) with the highest total revenue for each nationality in 2024. Sort by Nationality ASC, GuestID ASC.",
        initialCode: "-- Question 7: Write your SQL query here\nSELECT ",
        solutionSQL: "WITH GuestRevenue AS (SELECT g.Nationality, g.GuestID, g.FirstName || ' ' || g.LastName AS GuestName, COALESCE((SELECT SUM(bd.SubTotal) FROM Booking b JOIN BookingDetail bd ON b.BookingID = bd.BookingID WHERE b.GuestID = g.GuestID AND strftime('%Y', b.CheckInDate) = '2024'), 0) + COALESCE((SELECT SUM(bs.TotalCost) FROM Booking b JOIN BookingService bs ON b.BookingID = bs.BookingID WHERE b.GuestID = g.GuestID AND strftime('%Y', b.CheckInDate) = '2024'), 0) AS TotalRevenue FROM Guest g), MaxRev AS (SELECT Nationality, MAX(TotalRevenue) AS MaxTotalRev FROM GuestRevenue GROUP BY Nationality) SELECT gr.Nationality, gr.GuestID, gr.GuestName, ROUND(gr.TotalRevenue, 2) AS TotalRevenue FROM GuestRevenue gr JOIN MaxRev mr ON gr.Nationality = mr.Nationality AND gr.TotalRevenue = mr.MaxTotalRev ORDER BY gr.Nationality ASC, gr.GuestID ASC;"
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure addService with validation (T-SQL Reference)",
        description: "Write a stored procedure named addService to add a service to an existing booking. Parameters: @bookingID, @serviceID, @quantity.",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE addService\n    @bookingID INT,\n    @serviceID INT,\n    @quantity INT\nAS\nBEGIN\n    -- Your T-SQL code here\nEND",
        solutionSQL: `CREATE PROCEDURE addService\n    @bookingID INT,\n    @serviceID INT,\n    @quantity INT\nAS\nBEGIN\n    IF NOT EXISTS (SELECT 1 FROM Booking WHERE BookingID = @bookingID) OR\n       NOT EXISTS (SELECT 1 FROM Service WHERE ServiceID = @serviceID) OR\n       @quantity < 0\n    BEGIN\n        PRINT 'Input values are not valid.'\n        RETURN 1\n    END\n\n    DECLARE @unitPrice DECIMAL(10,2)\n    SELECT @unitPrice = UnitPrice FROM Service WHERE ServiceID = @serviceID\n\n    INSERT INTO BookingService(BookingID, ServiceID, Quantity, ServiceDate, TotalCost)\n    VALUES(@bookingID, @serviceID, @quantity, CAST(GETDATE() AS DATE), @quantity * @unitPrice)\n\n    RETURN 0\nEND`
      },
      {
        id: 9,
        title: "Question 9: Trigger trg_PreventRoomOverbooking (T-SQL Reference)",
        description: "Write a SQL Server trigger named trg_PreventRoomOverbooking on the BookingDetail table to prevent overlapping bookings for the same room.",
        initialCode: "-- Question 9: Trigger (T-SQL Reference)\nCREATE TRIGGER trg_PreventRoomOverbooking\nON BookingDetail\nINSTEAD OF INSERT\nAS\nBEGIN\n    -- Your T-SQL Trigger code here\nEND",
        solutionSQL: `CREATE TRIGGER trg_PreventRoomOverbooking\nON BookingDetail\nINSTEAD OF INSERT\nAS\nBEGIN\n    INSERT INTO BookingDetail (BookingID, RoomID, PricePerNight, NumNights)\n    SELECT i.BookingID, i.RoomID, i.PricePerNight, DATEDIFF(day, b.CheckInDate, b.CheckOutDate)\n    FROM inserted i\n    JOIN Booking b ON i.BookingID = b.BookingID\n    JOIN Room r ON i.RoomID = r.RoomID\n    WHERE NOT EXISTS (\n        SELECT 1 FROM BookingDetail bd\n        JOIN Booking existingB ON bd.BookingID = existingB.BookingID\n        WHERE bd.RoomID = i.RoomID\n          AND existingB.Status <> 'Cancelled'\n          AND b.CheckInDate < existingB.CheckOutDate\n          AND b.CheckOutDate > existingB.CheckInDate\n    );\nEND`
      },
      {
        id: 10,
        title: "Question 10: Update TotalAmount column for bookings 10 to 20",
        description: "Write a SQL statement to update the TotalAmount column for bookings whose BookingID is from 10 to 20 (inclusive). TotalAmount = sum(SubTotal) + sum(TotalCost).",
        initialCode: "-- Question 10: Write your UPDATE SQL here\nUPDATE Booking\nSET TotalAmount = ",
        solutionSQL: "UPDATE Booking SET TotalAmount = (COALESCE((SELECT SUM(SubTotal) FROM BookingDetail WHERE BookingDetail.BookingID = Booking.BookingID), 0) + COALESCE((SELECT SUM(TotalCost) FROM BookingService WHERE BookingService.BookingID = Booking.BookingID), 0)) WHERE BookingID BETWEEN 10 AND 20;"
      }
    ]
  },

  // ==================== EXAM 2 ====================
  {
    id: 'pe_exam2',
    code: 'DBI202_PE_SU2026_HOTEL_2',
    title: 'PE DBI202 - Đề 2 (Summer 2026)',
    subtitle: 'Hotel Booking System • Mã Đề 2',
    description: 'Đề thi thực hành PE SQL Summer 2026 (Bộ đề 2): Sơ đồ ERD Bệnh viện (Patients, Doctors, Appointments), truy vấn lọc thời gian, JOIN & thống kê.',
    icon: '🏨',
    badgeClass: 'badge-db',
    themeColor: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)',
    erdDiagramHtml: hotelBookingERDSvg,
    schemaDetails: hotelSchemaDetails,
    dbScript: `-- ============================================================
-- 1. RoomType
-- ============================================================
CREATE TABLE RoomType (
    RoomTypeID   INT            PRIMARY KEY,
    TypeName     VARCHAR(50)   NOT NULL UNIQUE,
    Description  VARCHAR(255)  NULL,
    BasePrice    DECIMAL(10,2) NOT NULL CHECK (BasePrice > 0),
    MaxOccupancy INTEGER       NOT NULL CHECK (MaxOccupancy BETWEEN 1 AND 10)
);
-- ============================================================
-- 2. Room
-- ============================================================
CREATE TABLE Room (
    RoomID     INT          PRIMARY KEY,
    RoomNumber VARCHAR(10) NOT NULL UNIQUE,
    RoomTypeID INT         NOT NULL,
    Floor      INTEGER     NOT NULL CHECK (Floor >= 1),
    Status     VARCHAR(20) NOT NULL DEFAULT 'Available'
                           CHECK (Status IN ('Available','Occupied','Maintenance','Reserved')),
    FOREIGN KEY (RoomTypeID) REFERENCES RoomType(RoomTypeID)
);
-- ============================================================
-- 3. Guest
-- ============================================================
CREATE TABLE Guest (
    GuestID     INT            PRIMARY KEY,
    FirstName   VARCHAR(50)   NOT NULL,
    LastName    VARCHAR(50)   NOT NULL,
    Email       VARCHAR(100)  NOT NULL UNIQUE,
    Phone       VARCHAR(20)   NULL,
    NationalID  VARCHAR(30)   NULL UNIQUE,
    Nationality VARCHAR(50)   NULL,
    DateOfBirth DATE          NULL,
    CreatedAt   TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- ============================================================
-- 4. Booking
-- ============================================================
CREATE TABLE Booking (
    BookingID    INT            PRIMARY KEY,
    GuestID      INT           NOT NULL,
    BookingDate  TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CheckInDate  DATE          NOT NULL,
    CheckOutDate DATE          NOT NULL,
    Status       VARCHAR(20)   NOT NULL DEFAULT 'Confirmed'
                               CHECK (Status IN ('Confirmed','Checked-In','Checked-Out','Cancelled','No-Show')),
    TotalAmount  DECIMAL(10,2) NOT NULL DEFAULT 0,
	PaymentDate datetime NULL DEFAULT CURRENT_TIMESTAMP,
	PaymentMethod varchar(30) NULL CHECK (PaymentMethod IN ('Cash','Credit Card','Debit Card','Bank Transfer','Online')),
	PaymentStatus varchar(20) NULL DEFAULT 'Completed'
                                CHECK (PaymentStatus IN ('Completed','Pending','Refunded','Failed')),
    Notes        VARCHAR(500)  NULL,
    FOREIGN KEY (GuestID) REFERENCES Guest(GuestID),
    CHECK (CheckOutDate > CheckInDate)
);
-- ============================================================
-- 5. BookingDetail  (1-3 rooms per booking)
-- ============================================================
CREATE TABLE BookingDetail (
    DetailID      INT            PRIMARY KEY,
    BookingID     INT           NOT NULL,
    RoomID        INT           NOT NULL,
    PricePerNight DECIMAL(10,2) NOT NULL CHECK (PricePerNight > 0),
    NumNights     INTEGER      NOT NULL CHECK (NumNights > 0),
    SubTotal DECIMAL(10,2) GENERATED ALWAYS AS (PricePerNight * NumNights) STORED,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (RoomID)    REFERENCES Room(RoomID),
    UNIQUE (BookingID, RoomID)
);
-- ============================================================
-- 6. BookingGuest  (1-4 occupants per BookingDetail)
-- ============================================================
CREATE TABLE BookingGuest (
    BookingGuestID  INT           PRIMARY KEY,
    DetailID        INT          NOT NULL,
    GuestID         INT          NOT NULL,
    IsPrimaryGuest  INTEGER          NOT NULL DEFAULT 0,
    FOREIGN KEY (DetailID) REFERENCES BookingDetail(DetailID),
    FOREIGN KEY (GuestID)  REFERENCES Guest(GuestID),
    UNIQUE (DetailID, GuestID)
);
-- ============================================================
-- 7. Service
-- ============================================================
CREATE TABLE Service (
    ServiceID   INT            PRIMARY KEY,
    ServiceName VARCHAR(100)  NOT NULL UNIQUE,
    Category    VARCHAR(50)   NOT NULL,
    UnitPrice   DECIMAL(10,2) NOT NULL CHECK (UnitPrice >= 0),
    Unit        VARCHAR(30)   NOT NULL DEFAULT 'per use'
);
-- ============================================================
-- 8. BookingService  (0-4 services per booking)
-- ============================================================
CREATE TABLE BookingService (
    BookingServiceID INT       PRIMARY KEY,
    BookingID        INT      NOT NULL,
    ServiceID        INT      NOT NULL,
    Quantity         INTEGER NOT NULL DEFAULT 1 CHECK (Quantity > 0),
    ServiceDate      DATE     NOT NULL DEFAULT CURRENT_DATE,
    TotalCost        DECIMAL(10,2) NULL,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
);
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (1, 'Alice', 'Nguyen', 'alice.nguyen1@email.com', '0900000001', 'NID0001', 'Vietnamese', '1970-01-01', '2023-12-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (2, 'Bob', 'Smith', 'bob.smith2@email.com', '0900000002', 'NID0002', 'American', '1981-08-14', '2023-12-25 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (3, 'Chen', 'Wei', 'chen.wei3@email.com', '0900000003', 'NID0003', 'Chinese', '1992-03-27', '2024-03-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (4, 'Maria', 'Garcia', 'maria.garcia4@email.com', '0900000004', 'NID0004', 'Spanish', '2003-10-12', '2024-02-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (5, 'Hiroshi', 'Tanaka', 'hiroshi.tanaka5@email.com', '0900000005', 'NID0005', 'Japanese', '1979-05-25', '2024-05-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (6, 'Linh', 'Tran', 'linh.tran6@email.com', '0900000006', 'NID0006', 'Vietnamese', '1990-12-10', '2024-05-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (7, 'James', 'Wilson', 'james.wilson7@email.com', '0900000007', 'NID0007', 'British', '2001-07-23', '2024-07-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (8, 'Sophie', 'Pham', 'sophie.pham8@email.com', '0900000008', 'NID0008', 'Vietnamese', '1977-02-08', '2024-02-14 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (9, 'Linda', 'Le', 'linda.le9@email.com', '0900000009', 'NID0009', 'Chinese', '1988-09-21', '2024-02-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (10, 'Carlos', 'Rodriguez', 'carlos.rodriguez10@email.com', '0900000010', 'NID0010', 'Spanish', '1999-04-06', '2024-03-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (11, 'Yuki', 'Suzuki', 'yuki.suzuki11@email.com', '0900000011', 'NID0011', 'Japanese', '1975-11-19', '2024-10-26 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (12, 'Emily', 'Johnson', 'emily.johnson12@email.com', '0900000012', 'NID0012', 'American', '1986-06-04', '2024-05-28 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (13, 'David', 'Brown', 'david.brown13@email.com', '0900000013', 'NID0013', 'British', '1997-01-17', '2023-12-30 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (14, 'Sarah', 'Martinez', 'sarah.martinez14@email.com', '0900000014', 'NID0014', 'Spanish', '1973-08-02', '2024-08-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (15, 'Ahmed', 'Ali', 'ahmed.ali15@email.com', '0900000015', 'NID0015', 'Egyptian', '1984-03-15', '2024-03-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (16, 'Fatima', 'Hassan', 'fatima.hassan16@email.com', '0900000016', 'NID0016', 'Egyptian', '1995-10-28', '2024-10-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (17, 'Pierre', 'Dupont', 'pierre.dupont17@email.com', '0900000017', 'NID0017', 'French', '1971-05-13', '2024-05-21 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (18, 'Isabelle', 'Laurent', 'isabelle.laurent18@email.com', '0900000018', 'NID0018', 'French', '1982-12-26', '2023-12-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (19, 'Nguyen', 'Hoang', 'nguyen.hoang19@email.com', '0900000019', 'NID0019', 'Vietnamese', '1993-07-11', '2024-07-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (20, 'Tran', 'Dao', 'tran.dao20@email.com', '0900000020', 'NID0020', 'Vietnamese', '2004-02-24', '2024-03-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (21, 'Michael', 'Johnson', 'michael.johnson21@email.com', '0900000021', 'NID0021', 'American', '1980-09-09', '2024-10-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (22, 'Anna', 'Kovacs', 'anna.kovacs22@email.com', '0900000022', 'NID0022', 'Hungarian', '1991-04-22', '2024-05-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (23, 'Ravi', 'Sharma', 'ravi.sharma23@email.com', '0900000023', 'NID0023', 'Indian', '2002-11-07', '2024-12-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (24, 'Priya', 'Patel', 'priya.patel24@email.com', '0900000024', 'NID0024', 'Indian', '1978-06-20', '2024-07-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (25, 'Lars', 'Eriksson', 'lars.eriksson25@email.com', '0900000025', 'NID0025', 'Swedish', '1989-01-05', '2024-02-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (26, 'Astrid', 'Hansen', 'astrid.hansen26@email.com', '0900000026', 'NID0026', 'Norwegian', '2000-08-18', '2024-08-20 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (27, 'Omar', 'Ibrahim', 'omar.ibrahim27@email.com', '0900000027', 'NID0027', 'Jordanian', '1976-03-03', '2024-03-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (28, 'Layla', 'Mansour', 'layla.mansour28@email.com', '0900000028', 'NID0028', 'Lebanese', '1987-10-16', '2024-10-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (29, 'Marco', 'Rossi', 'marco.rossi29@email.com', '0900000029', 'NID0029', 'Italian', '1998-05-01', '2024-06-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (30, 'Giulia', 'Ferrari', 'giulia.ferrari30@email.com', '0900000030', 'NID0030', 'Italian', '1974-12-14', '2024-01-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (31, 'Kenji', 'Yamamoto', 'kenji.yamamoto31@email.com', '0900000031', 'NID0031', 'Japanese', '1985-07-27', '2024-08-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (32, 'Sakura', 'Nakamura', 'sakura.nakamura32@email.com', '0900000032', 'NID0032', 'Japanese', '1996-02-12', '2024-03-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (33, 'Hassan', 'Al-Farsi', 'hassan.al-farsi33@email.com', '0900000033', 'NID0033', 'Omani', '1972-09-25', '2024-10-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (34, 'Amira', 'Khalil', 'amira.khalil34@email.com', '0900000034', 'NID0034', 'Jordanian', '1983-04-10', '2024-05-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (35, 'Luke', 'Anderson', 'luke.anderson35@email.com', '0900000035', 'NID0035', 'Australian', '1994-11-23', '2023-12-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (36, 'Emma', 'Thomas', 'emma.thomas36@email.com', '0900000036', 'NID0036', 'British', '1970-06-08', '2024-07-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (37, 'Ivan', 'Petrov', 'ivan.petrov37@email.com', '0900000037', 'NID0037', 'Russian', '1981-01-21', '2024-02-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (38, 'Natasha', 'Ivanova', 'natasha.ivanova38@email.com', '0900000038', 'NID0038', 'Russian', '1992-08-06', '2024-10-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (39, 'Wei', 'Liu', 'wei.liu39@email.com', '0900000039', 'NID0039', 'Chinese', '2003-03-19', '2024-05-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (40, 'Mei', 'Zhang', 'mei.zhang40@email.com', '0900000040', 'NID0040', 'Chinese', '1979-10-04', '2024-12-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (41, 'Thomas', 'Mueller', 'thomas.mueller41@email.com', '0900000041', 'NID0041', 'German', '1990-05-17', '2024-07-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (42, 'Claire', 'Wagner', 'claire.wagner42@email.com', '0900000042', 'NID0042', 'German', '2001-12-02', '2024-02-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (43, 'Alex', 'Taylor', 'alex.taylor43@email.com', '0900000043', 'NID0043', 'Australian', '1977-07-15', '2024-09-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (44, 'Jordan', 'Morgan', 'jordan.morgan44@email.com', '0900000044', 'NID0044', 'British', '1988-02-28', '2024-04-03 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (45, 'Sam', 'Davis', 'sam.davis45@email.com', '0900000045', 'NID0045', 'American', '1999-09-13', '2024-11-05 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (46, 'Taylor', 'Robinson', 'taylor.robinson46@email.com', '0900000046', 'NID0046', 'British', '1975-04-26', '2024-06-07 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (47, 'Lee', 'Park', 'lee.park47@email.com', '0900000047', 'NID0047', 'Korean', '1986-11-11', '2024-01-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (48, 'Kim', 'Choi', 'kim.choi48@email.com', '0900000048', 'NID0048', 'Korean', '1997-06-24', '2024-08-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (49, 'Raj', 'Singh', 'raj.singh49@email.com', '0900000049', 'NID0049', 'Indian', '1973-01-09', '2024-03-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (50, 'Aisha', 'Osei', 'aisha.osei50@email.com', '0900000050', 'NID0050', 'Ghanaian', '1984-08-22', '2024-10-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (51, 'Aisha', 'Osaki', 'aisha.osaki51@email.com', '0978900050', 'NID0051', 'Japanese', '1990-08-22', '2024-11-15 00:00:00');
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (1, 'Standard', 'Cozy room with basic amenities', CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (2, 'Deluxe', 'Spacious room with city or garden view', CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (3, 'Suite', 'Luxury suite with living area and minibar', CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (4, 'Family', 'Large room with two queen beds', CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (5, 'Penthouse', 'Top-floor suite with panoramic view and pool', CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (1, 'Breakfast Buffet', 'Food & Beverage', CAST(15.00 AS Decimal(10, 2)), 'per person per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (2, 'Breakfast Room Service', 'Food & Beverage', CAST(10.00 AS Decimal(10, 2)), 'per order');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (3, 'Airport Transfer', 'Transport', CAST(25.00 AS Decimal(10, 2)), 'per trip');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (4, 'Laundry Service', 'Housekeeping', CAST(8.00 AS Decimal(10, 2)), 'per bag');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (5, 'Spa & Massage', 'Wellness', CAST(50.00 AS Decimal(10, 2)), 'per session');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (6, 'Mini Bar Refill', 'Food & Beverage', CAST(20.00 AS Decimal(10, 2)), 'per refill');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (7, 'Parking', 'Transport', CAST(5.00 AS Decimal(10, 2)), 'per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (8, 'Swimming Pool', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (9, 'Gym Access', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (10, 'Business Center', 'Business', CAST(10.00 AS Decimal(10, 2)), 'per hour');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (1, '101', 1, 1, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (2, '102', 1, 1, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (3, '201', 1, 2, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (4, '202', 1, 2, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (5, '301', 1, 3, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (6, '302', 1, 3, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (7, '401', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (8, '402', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (9, '403', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (10, '404', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (11, '501', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (12, '502', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (13, '503', 2, 5, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (14, '504', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (15, '601', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (16, '602', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (17, '603', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (18, '604', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (19, '605', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (20, '606', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (21, '701', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (22, '702', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (23, '703', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (24, '704', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (25, '705', 4, 7, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (26, '706', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (27, '801', 5, 8, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (28, '802', 5, 8, 'Maintenance');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (29, '803', 5, 8, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (30, '804', 5, 8, 'Available');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (1, 1, '2023-12-31 00:00:00', '2024-01-01', '2024-01-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-01-02 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (2, 1, '2024-08-02 00:00:00', '2024-08-04', '2024-08-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-08-06 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (3, 1, '2024-03-04 00:00:00', '2024-03-07', '2024-03-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-03-10 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (4, 1, '2024-10-06 00:00:00', '2024-10-10', '2024-10-14', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-10-14 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (5, 2, '2024-05-08 00:00:00', '2024-05-13', '2024-05-18', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-05-18 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (6, 2, '2024-12-10 00:00:00', '2024-12-16', '2024-12-22', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-12-22 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (7, 2, '2024-07-12 00:00:00', '2024-07-19', '2024-07-26', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-07-26 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (8, 2, '2024-02-14 00:00:00', '2024-02-22', '2024-02-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-02-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (9, 3, '2024-09-16 00:00:00', '2024-09-25', '2024-09-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-09-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (10, 3, '2024-03-24 00:00:00', '2024-04-03', '2024-04-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-04-06 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (11, 3, '2024-10-26 00:00:00', '2024-11-06', '2024-11-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-10 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (12, 3, '2024-05-28 00:00:00', '2024-06-09', '2024-06-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-14 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (13, 4, '2023-12-30 00:00:00', '2024-01-12', '2024-01-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-18 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (14, 4, '2024-08-01 00:00:00', '2024-08-15', '2024-08-22', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-08-22 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (15, 4, '2024-03-17 00:00:00', '2024-03-18', '2024-03-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (16, 4, '2024-10-19 00:00:00', '2024-10-21', '2024-10-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-10-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (17, 5, '2024-05-21 00:00:00', '2024-05-24', '2024-05-27', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-05-27 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (18, 5, '2023-12-29 00:00:00', '2024-01-02', '2024-01-06', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-01-06 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (19, 5, '2024-07-31 00:00:00', '2024-08-05', '2024-08-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-08-10 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (20, 5, '2024-03-02 00:00:00', '2024-03-08', '2024-03-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-03-14 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (21, 6, '2024-10-04 00:00:00', '2024-10-11', '2024-10-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-10-18 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (22, 6, '2024-05-06 00:00:00', '2024-05-14', '2024-05-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-05-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (23, 6, '2024-12-08 00:00:00', '2024-12-17', '2024-12-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-12-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (24, 6, '2024-07-10 00:00:00', '2024-07-20', '2024-07-23', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-07-23 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (25, 7, '2024-02-12 00:00:00', '2024-02-23', '2024-02-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-02-27 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (26, 7, '2024-08-20 00:00:00', '2024-09-01', '2024-09-06', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-06 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (27, 7, '2024-03-22 00:00:00', '2024-04-04', '2024-04-10', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-10 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (28, 7, '2024-10-24 00:00:00', '2024-11-07', '2024-11-14', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-14 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (29, 8, '2024-06-09 00:00:00', '2024-06-10', '2024-06-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (30, 8, '2024-01-11 00:00:00', '2024-01-13', '2024-01-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (31, 8, '2024-08-13 00:00:00', '2024-08-16', '2024-08-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-08-19 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (32, 8, '2024-03-15 00:00:00', '2024-03-19', '2024-03-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-03-23 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (33, 9, '2024-10-17 00:00:00', '2024-10-22', '2024-10-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-10-27 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (34, 9, '2024-05-19 00:00:00', '2024-05-25', '2024-05-31', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-05-31 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (35, 9, '2023-12-27 00:00:00', '2024-01-03', '2024-01-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-01-10 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (36, 10, '2024-07-29 00:00:00', '2024-08-06', '2024-08-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-08-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (37, 10, '2024-02-29 00:00:00', '2024-03-09', '2024-03-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-03-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (38, 10, '2024-10-02 00:00:00', '2024-10-12', '2024-10-15', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-10-15 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (39, 11, '2024-05-04 00:00:00', '2024-05-15', '2024-05-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-05-19 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (40, 11, '2024-12-06 00:00:00', '2024-12-18', '2024-12-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-12-23 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (41, 11, '2024-07-08 00:00:00', '2024-07-21', '2024-07-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-27 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (42, 12, '2024-02-10 00:00:00', '2024-02-24', '2024-03-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-02 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (43, 12, '2024-09-01 00:00:00', '2024-09-02', '2024-09-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-03 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (44, 12, '2024-04-03 00:00:00', '2024-04-05', '2024-04-07', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-07 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (45, 13, '2024-11-05 00:00:00', '2024-11-08', '2024-11-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-11 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (46, 13, '2024-06-07 00:00:00', '2024-06-11', '2024-06-15', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-06-15 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (47, 13, '2024-01-09 00:00:00', '2024-01-14', '2024-01-19', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-01-19 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (48, 14, '2024-08-11 00:00:00', '2024-08-17', '2024-08-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-08-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (49, 14, '2024-03-13 00:00:00', '2024-03-20', '2024-03-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-03-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (50, 14, '2024-10-15 00:00:00', '2024-10-23', '2024-10-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-10-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (51, 15, '2024-05-23 00:00:00', '2024-06-01', '2024-06-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-06-03 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (52, 15, '2023-12-25 00:00:00', '2024-01-04', '2024-01-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-01-07 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (53, 15, '2024-07-27 00:00:00', '2024-08-07', '2024-08-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-08-11 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (54, 16, '2024-02-27 00:00:00', '2024-03-10', '2024-03-15', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-03-15 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (55, 16, '2024-09-30 00:00:00', '2024-10-13', '2024-10-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-10-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (56, 16, '2024-05-02 00:00:00', '2024-05-16', '2024-05-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-05-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (57, 17, '2024-12-18 00:00:00', '2024-12-19', '2024-12-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-12-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (58, 17, '2024-07-20 00:00:00', '2024-07-22', '2024-07-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (59, 17, '2024-02-22 00:00:00', '2024-02-25', '2024-02-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-02-28 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (60, 18, '2024-08-30 00:00:00', '2024-09-03', '2024-09-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-07 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (61, 18, '2025-04-01 00:00:00', '2025-04-06', '2025-04-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-04-11 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (62, 18, '2025-11-03 00:00:00', '2025-11-09', '2025-11-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-11-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (63, 19, '2025-06-05 00:00:00', '2025-06-12', '2025-06-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-06-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (64, 19, '2025-01-07 00:00:00', '2025-01-15', '2025-01-16', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-01-16 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (65, 20, '2025-08-09 00:00:00', '2025-08-18', '2025-08-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-08-20 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (66, 20, '2025-03-11 00:00:00', '2025-03-21', '2025-03-24', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-03-24 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (67, 21, '2025-10-13 00:00:00', '2025-10-24', '2025-10-28', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-10-28 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (68, 21, '2025-05-21 00:00:00', '2025-06-02', '2025-06-07', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-06-07 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (69, 22, '2024-12-23 00:00:00', '2025-01-05', '2025-01-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-01-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (70, 22, '2025-07-25 00:00:00', '2025-08-08', '2025-08-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-08-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (71, 23, '2025-03-10 00:00:00', '2025-03-11', '2025-03-12', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-12 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (72, 23, '2025-10-12 00:00:00', '2025-10-14', '2025-10-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-16 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (73, 24, '2025-05-14 00:00:00', '2025-05-17', '2025-05-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-20 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (74, 24, '2025-12-16 00:00:00', '2025-12-20', '2025-12-24', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-12-24 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (75, 25, '2025-07-18 00:00:00', '2025-07-23', '2025-07-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-07-28 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (76, 25, '2025-01-26 00:00:00', '2025-02-01', '2025-02-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-02-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (77, 26, '2025-08-28 00:00:00', '2025-09-04', '2025-09-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-09-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (78, 26, '2025-03-30 00:00:00', '2025-04-07', '2025-04-08', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-04-08 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (79, 27, '2025-11-01 00:00:00', '2025-11-10', '2025-11-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-11-12 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (80, 27, '2025-06-03 00:00:00', '2025-06-13', '2025-06-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-06-16 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (81, 28, '2025-01-05 00:00:00', '2025-01-16', '2025-01-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-01-20 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (82, 28, '2025-08-07 00:00:00', '2025-08-19', '2025-08-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-08-24 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (83, 29, '2025-03-09 00:00:00', '2025-03-22', '2025-03-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-03-28 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (84, 30, '2025-10-11 00:00:00', '2025-10-25', '2025-11-01', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-11-01 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (85, 31, '2025-06-02 00:00:00', '2025-06-03', '2025-06-04', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-06-04 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (86, 32, '2025-01-04 00:00:00', '2025-01-06', '2025-01-08', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-01-08 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (87, 33, '2025-08-06 00:00:00', '2025-08-09', '2025-08-12', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-08-12 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (88, 34, '2025-03-08 00:00:00', '2025-03-12', '2025-03-16', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-16 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (89, 35, '2025-10-10 00:00:00', '2025-10-15', '2025-10-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-20 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (90, 36, '2025-05-12 00:00:00', '2025-05-18', '2025-05-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (91, 37, '2025-12-14 00:00:00', '2025-12-21', '2025-12-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-12-28 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (92, 38, '2025-07-16 00:00:00', '2025-07-24', '2025-07-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-07-25 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (93, 39, '2025-01-24 00:00:00', '2025-02-02', '2025-02-04', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-02-04 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (94, 40, '2025-08-26 00:00:00', '2025-09-05', '2025-09-08', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-09-08 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (95, 41, '2025-03-28 00:00:00', '2025-04-08', '2025-04-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-04-12 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (96, 42, '2025-10-30 00:00:00', '2025-11-11', '2025-11-16', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-11-16 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (97, 43, '2025-06-01 00:00:00', '2025-06-14', '2025-06-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-06-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (98, 44, '2025-01-03 00:00:00', '2025-01-17', '2025-01-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-01-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (99, 45, '2025-08-19 00:00:00', '2025-08-20', '2025-08-21', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-08-21 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (100, 46, '2025-03-21 00:00:00', '2025-03-23', '2025-03-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-03-25 00:00:00', 'Cash', 'Completed');
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (1, 1, 1, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (2, 1, 2, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (3, 2, 3, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (4, 2, 4, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (5, 2, 5, CAST(96.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (6, 3, 6, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (7, 4, 7, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (8, 4, 8, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (9, 5, 9, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (10, 5, 10, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (11, 5, 11, CAST(180.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (12, 6, 12, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (13, 7, 13, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (14, 7, 14, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (15, 8, 15, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (16, 8, 16, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (17, 8, 17, CAST(360.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (18, 9, 18, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (19, 10, 19, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (20, 10, 20, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (21, 11, 21, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (22, 11, 22, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (23, 11, 23, CAST(240.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (24, 12, 24, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (25, 13, 25, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (26, 13, 26, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (27, 14, 27, CAST(600.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (28, 14, 28, CAST(660.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (29, 14, 29, CAST(720.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (30, 15, 30, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (31, 16, 1, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (32, 16, 2, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (33, 17, 3, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (34, 17, 4, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (35, 17, 5, CAST(96.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (36, 18, 6, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (37, 19, 7, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (38, 19, 8, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (39, 20, 9, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (40, 20, 10, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (41, 20, 11, CAST(180.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (42, 21, 12, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (43, 22, 13, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (44, 22, 14, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (45, 23, 15, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (46, 23, 16, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (47, 23, 17, CAST(360.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (48, 24, 18, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (49, 25, 19, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (50, 25, 20, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (51, 26, 21, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (52, 26, 22, CAST(220.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (53, 26, 23, CAST(240.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (54, 27, 24, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (55, 28, 25, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (56, 28, 26, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (57, 29, 27, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (58, 29, 28, CAST(660.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (59, 29, 29, CAST(720.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (60, 30, 30, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (61, 31, 1, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (62, 31, 2, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (63, 32, 3, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (64, 32, 4, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (65, 32, 5, CAST(96.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (66, 33, 6, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (67, 34, 7, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (68, 34, 8, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (69, 35, 9, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (70, 35, 10, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (71, 35, 11, CAST(180.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (72, 36, 12, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (73, 37, 13, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (74, 37, 14, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (75, 38, 15, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (76, 38, 16, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (77, 38, 17, CAST(360.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (78, 39, 18, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (79, 40, 19, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (80, 40, 20, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (81, 41, 21, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (82, 41, 22, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (83, 41, 23, CAST(240.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (84, 42, 24, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (85, 43, 25, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (86, 43, 26, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (87, 44, 27, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (88, 44, 28, CAST(660.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (89, 44, 29, CAST(720.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (90, 45, 30, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (91, 46, 1, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (92, 46, 2, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (93, 47, 3, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (94, 47, 4, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (95, 47, 5, CAST(96.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (96, 48, 6, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (97, 49, 7, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (98, 49, 8, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (99, 50, 9, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (100, 50, 10, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (101, 50, 11, CAST(180.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (102, 51, 12, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (103, 52, 13, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (104, 52, 14, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (105, 53, 15, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (106, 53, 16, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (107, 53, 17, CAST(360.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (108, 54, 18, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (109, 55, 19, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (110, 55, 20, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (111, 56, 21, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (112, 56, 22, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (113, 56, 23, CAST(240.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (114, 57, 24, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (115, 58, 25, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (116, 58, 26, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (117, 59, 27, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (118, 59, 28, CAST(660.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (119, 59, 29, CAST(720.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (120, 60, 30, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (121, 61, 1, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (122, 61, 2, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (123, 62, 3, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (124, 62, 4, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (125, 62, 5, CAST(96.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (126, 63, 6, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (127, 64, 7, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (128, 64, 8, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (129, 65, 9, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (130, 65, 10, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (131, 65, 11, CAST(180.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (132, 66, 12, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (133, 67, 13, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (134, 67, 14, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (135, 68, 15, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (136, 68, 16, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (137, 68, 17, CAST(360.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (138, 69, 18, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (139, 70, 19, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (140, 70, 20, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (141, 71, 21, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (142, 71, 22, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (143, 71, 23, CAST(240.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (144, 72, 24, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (145, 73, 25, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (146, 73, 26, CAST(220.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (147, 74, 27, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (148, 74, 28, CAST(660.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (149, 74, 29, CAST(720.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (150, 75, 30, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (151, 76, 1, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (152, 76, 2, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (153, 77, 3, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (154, 77, 4, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (155, 77, 5, CAST(96.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (156, 78, 6, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (157, 79, 7, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (158, 79, 8, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (159, 80, 9, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (160, 80, 10, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (161, 80, 11, CAST(180.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (162, 81, 12, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (163, 82, 13, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (164, 82, 14, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (165, 83, 15, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (166, 83, 16, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (167, 83, 17, CAST(360.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (168, 84, 18, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (169, 85, 19, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (170, 85, 20, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (171, 86, 21, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (172, 86, 22, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (173, 86, 23, CAST(240.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (174, 87, 24, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (175, 88, 25, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (176, 88, 26, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (177, 89, 27, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (178, 89, 28, CAST(660.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (179, 89, 29, CAST(720.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (180, 90, 30, CAST(600.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (181, 91, 1, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (182, 91, 2, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (183, 92, 3, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (184, 92, 4, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (185, 92, 5, CAST(96.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (186, 93, 6, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (187, 94, 7, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (188, 94, 8, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (189, 95, 9, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (190, 95, 10, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (191, 95, 11, CAST(180.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (192, 96, 12, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (193, 97, 13, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (194, 97, 14, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (195, 98, 15, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (196, 98, 16, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (197, 98, 17, CAST(360.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (198, 99, 18, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (199, 100, 19, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (200, 100, 20, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (1, 1, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (2, 1, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (3, 2, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (4, 2, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (5, 3, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (6, 3, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (7, 4, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (8, 5, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (9, 5, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (10, 6, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (11, 6, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (12, 7, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (13, 7, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (14, 8, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (15, 9, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (16, 9, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (17, 10, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (18, 10, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (19, 11, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (20, 11, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (21, 12, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (22, 13, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (23, 13, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (24, 14, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (25, 14, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (26, 15, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (27, 15, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (28, 15, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (29, 15, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (30, 16, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (31, 17, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (32, 17, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (33, 18, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (34, 18, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (35, 18, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (36, 19, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (37, 19, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (38, 19, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (39, 19, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (40, 20, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (41, 21, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (42, 21, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (43, 22, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (44, 22, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (45, 22, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (46, 23, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (47, 23, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (48, 23, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (49, 23, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (50, 24, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (51, 25, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (52, 25, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (53, 26, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (54, 26, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (55, 26, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (56, 27, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (57, 27, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (58, 27, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (59, 27, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (60, 28, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (61, 29, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (62, 29, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (63, 30, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (64, 30, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (65, 30, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (66, 31, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (67, 31, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (68, 32, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (69, 33, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (70, 33, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (71, 34, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (72, 34, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (73, 35, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (74, 35, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (75, 36, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (76, 37, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (77, 37, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (78, 38, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (79, 38, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (80, 39, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (81, 39, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (82, 40, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (83, 41, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (84, 41, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (85, 42, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (86, 42, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (87, 43, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (88, 43, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (89, 44, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (90, 45, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (91, 45, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (92, 46, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (93, 46, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (94, 46, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (95, 47, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (96, 47, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (97, 47, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (98, 47, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (99, 48, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (100, 49, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (101, 49, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (102, 50, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (103, 50, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (104, 50, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (105, 51, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (106, 51, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (107, 51, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (108, 51, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (109, 52, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (110, 53, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (111, 53, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (112, 54, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (113, 54, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (114, 54, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (115, 55, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (116, 55, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (117, 55, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (118, 55, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (119, 56, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (120, 57, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (121, 57, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (122, 58, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (123, 58, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (124, 58, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (125, 59, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (126, 59, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (127, 59, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (128, 59, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (129, 60, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (130, 61, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (131, 61, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (132, 62, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (133, 62, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (134, 63, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (135, 63, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (136, 64, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (137, 65, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (138, 65, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (139, 66, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (140, 66, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (141, 67, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (142, 67, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (143, 68, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (144, 69, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (145, 69, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (146, 70, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (147, 70, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (148, 71, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (149, 71, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (150, 72, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (151, 73, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (152, 73, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (153, 74, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (154, 74, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (155, 75, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (156, 75, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (157, 75, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (158, 75, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (159, 76, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (160, 77, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (161, 77, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (162, 78, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (163, 78, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (164, 78, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (165, 79, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (166, 79, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (167, 79, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (168, 79, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (169, 80, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (170, 81, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (171, 81, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (172, 82, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (173, 82, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (174, 82, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (175, 83, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (176, 83, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (177, 83, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (178, 83, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (179, 84, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (180, 85, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (181, 85, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (182, 86, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (183, 86, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (184, 86, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (185, 87, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (186, 87, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (187, 87, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (188, 87, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (189, 88, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (190, 89, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (191, 89, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (192, 90, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (193, 90, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (194, 90, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (195, 91, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (196, 91, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (197, 92, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (198, 93, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (199, 93, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (200, 94, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (201, 94, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (202, 95, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (203, 95, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (204, 96, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (205, 97, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (206, 97, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (207, 98, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (208, 98, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (209, 99, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (210, 99, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (211, 100, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (212, 101, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (213, 101, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (214, 102, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (215, 102, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (216, 103, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (217, 103, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (218, 104, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (219, 105, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (220, 105, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (221, 106, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (222, 106, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (223, 106, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (224, 107, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (225, 107, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (226, 107, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (227, 107, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (228, 108, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (229, 109, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (230, 109, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (231, 110, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (232, 110, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (233, 110, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (234, 111, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (235, 111, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (236, 111, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (237, 111, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (238, 112, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (239, 113, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (240, 113, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (241, 114, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (242, 114, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (243, 114, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (244, 115, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (245, 115, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (246, 115, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (247, 115, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (248, 116, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (249, 117, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (250, 117, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (251, 118, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (252, 118, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (253, 118, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (254, 119, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (255, 119, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (256, 119, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (257, 119, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (258, 120, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (259, 121, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (260, 121, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (261, 122, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (262, 122, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (263, 123, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (264, 123, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (265, 124, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (266, 125, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (267, 125, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (268, 126, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (269, 126, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (270, 127, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (271, 127, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (272, 128, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (273, 129, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (274, 129, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (275, 130, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (276, 130, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (277, 131, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (278, 131, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (279, 132, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (280, 133, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (281, 133, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (282, 134, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (283, 134, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (284, 135, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (285, 135, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (286, 135, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (287, 135, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (288, 136, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (289, 137, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (290, 137, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (291, 138, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (292, 138, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (293, 138, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (294, 139, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (295, 139, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (296, 139, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (297, 139, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (298, 140, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (299, 141, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (300, 141, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (301, 142, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (302, 142, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (303, 142, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (304, 143, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (305, 143, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (306, 143, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (307, 143, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (308, 144, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (309, 145, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (310, 145, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (311, 146, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (312, 146, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (313, 146, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (314, 147, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (315, 147, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (316, 147, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (317, 147, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (318, 148, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (319, 149, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (320, 149, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (321, 150, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (322, 150, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (323, 150, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (324, 151, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (325, 151, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (326, 152, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (327, 153, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (328, 153, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (329, 154, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (330, 154, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (331, 155, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (332, 155, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (333, 156, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (334, 157, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (335, 157, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (336, 158, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (337, 158, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (338, 159, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (339, 159, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (340, 160, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (341, 161, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (342, 161, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (343, 162, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (344, 162, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (345, 163, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (346, 163, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (347, 164, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (348, 165, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (349, 165, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (350, 166, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (351, 166, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (352, 166, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (353, 167, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (354, 167, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (355, 167, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (356, 167, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (357, 168, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (358, 169, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (359, 169, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (360, 170, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (361, 170, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (362, 170, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (363, 171, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (364, 171, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (365, 171, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (366, 171, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (367, 172, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (368, 173, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (369, 173, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (370, 174, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (371, 174, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (372, 174, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (373, 175, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (374, 175, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (375, 175, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (376, 175, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (377, 176, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (378, 177, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (379, 177, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (380, 178, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (381, 178, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (382, 178, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (383, 179, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (384, 179, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (385, 179, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (386, 179, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (387, 180, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (388, 181, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (389, 181, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (390, 182, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (391, 182, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (392, 183, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (393, 183, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (394, 184, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (395, 185, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (396, 185, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (397, 186, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (398, 186, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (399, 187, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (400, 187, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (401, 188, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (402, 189, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (403, 189, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (404, 190, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (405, 190, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (406, 191, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (407, 191, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (408, 192, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (409, 193, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (410, 193, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (411, 194, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (412, 194, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (413, 195, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (414, 195, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (415, 195, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (416, 195, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (417, 196, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (418, 197, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (419, 197, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (420, 198, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (421, 198, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (422, 198, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (423, 199, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (424, 199, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (425, 199, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (426, 199, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (427, 200, 2, 0);
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (1, 1, 4, 1, '2024-01-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (2, 2, 7, 1, '2024-08-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (3, 2, 4, 2, '2024-08-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (4, 3, 10, 1, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (5, 3, 7, 2, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (6, 3, 4, 3, '2024-03-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (7, 4, 3, 1, '2024-10-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (8, 4, 10, 2, '2024-10-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (9, 4, 7, 3, '2024-10-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (10, 4, 4, 1, '2024-10-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (11, 6, 9, 1, '2024-12-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (12, 7, 2, 1, '2024-07-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (13, 7, 9, 2, '2024-07-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (14, 8, 5, 1, '2024-02-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (15, 8, 2, 2, '2024-02-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (16, 8, 9, 3, '2024-02-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (17, 9, 8, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (18, 9, 5, 2, '2024-09-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (19, 9, 2, 3, '2024-09-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (20, 9, 9, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (21, 11, 4, 1, '2024-11-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (22, 12, 7, 1, '2024-06-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (23, 12, 4, 2, '2024-06-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (24, 13, 10, 1, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (25, 13, 7, 2, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (26, 13, 4, 3, '2024-01-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (27, 14, 3, 1, '2024-08-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (28, 14, 10, 2, '2024-08-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (29, 14, 7, 3, '2024-08-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (30, 14, 4, 1, '2024-08-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (31, 16, 9, 1, '2024-10-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (32, 17, 2, 1, '2024-05-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (33, 17, 9, 2, '2024-05-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (34, 18, 5, 1, '2024-01-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (35, 18, 2, 2, '2024-01-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (36, 18, 9, 3, '2024-01-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (37, 19, 8, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (38, 19, 5, 2, '2024-08-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (39, 19, 2, 3, '2024-08-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (40, 19, 9, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (41, 21, 4, 1, '2024-10-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (42, 22, 7, 1, '2024-05-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (43, 22, 4, 2, '2024-05-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (44, 23, 10, 1, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (45, 23, 7, 2, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (46, 23, 4, 3, '2024-12-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (47, 24, 3, 1, '2024-07-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (48, 24, 10, 2, '2024-07-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (49, 24, 7, 3, '2024-07-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (50, 24, 4, 1, '2024-07-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (51, 26, 9, 1, '2024-09-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (52, 27, 2, 1, '2024-04-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (53, 27, 9, 2, '2024-04-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (54, 28, 5, 1, '2024-11-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (55, 28, 2, 2, '2024-11-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (56, 28, 9, 3, '2024-11-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (57, 29, 8, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (58, 29, 5, 2, '2024-06-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (59, 29, 2, 3, '2024-06-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (60, 29, 9, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (61, 31, 4, 1, '2024-08-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (62, 32, 7, 1, '2024-03-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (63, 32, 4, 2, '2024-03-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (64, 33, 10, 1, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (65, 33, 7, 2, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (66, 33, 4, 3, '2024-10-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (67, 34, 3, 1, '2024-05-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (68, 34, 10, 2, '2024-05-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (69, 34, 7, 3, '2024-05-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (70, 34, 4, 1, '2024-05-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (71, 36, 9, 1, '2024-08-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (72, 37, 2, 1, '2024-03-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (73, 37, 9, 2, '2024-03-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (74, 38, 5, 1, '2024-10-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (75, 38, 2, 2, '2024-10-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (76, 38, 9, 3, '2024-10-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (77, 39, 8, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (78, 39, 5, 2, '2024-05-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (79, 39, 2, 3, '2024-05-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (80, 39, 9, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (81, 41, 4, 1, '2024-07-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (82, 42, 7, 1, '2024-02-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (83, 42, 4, 2, '2024-02-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (84, 43, 10, 1, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (85, 43, 7, 2, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (86, 43, 4, 3, '2024-09-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (87, 44, 3, 1, '2024-04-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (88, 44, 10, 2, '2024-04-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (89, 44, 7, 3, '2024-04-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (90, 44, 4, 1, '2024-04-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (91, 46, 9, 1, '2024-06-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (92, 47, 2, 1, '2024-01-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (93, 47, 9, 2, '2024-01-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (94, 48, 5, 1, '2024-08-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (95, 48, 2, 2, '2024-08-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (96, 48, 9, 3, '2024-08-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (97, 49, 8, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (98, 49, 5, 2, '2024-03-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (99, 49, 2, 3, '2024-03-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (100, 49, 9, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (101, 51, 4, 1, '2024-06-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (102, 52, 7, 1, '2024-01-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (103, 52, 4, 2, '2024-01-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (104, 53, 10, 1, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (105, 53, 7, 2, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (106, 53, 4, 3, '2024-08-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (107, 54, 3, 1, '2024-03-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (108, 54, 10, 2, '2024-03-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (109, 54, 7, 3, '2024-03-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (110, 54, 4, 1, '2024-03-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (111, 56, 9, 1, '2024-05-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (112, 57, 2, 1, '2024-12-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (113, 57, 9, 2, '2024-12-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (114, 58, 5, 1, '2024-07-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (115, 58, 2, 2, '2024-07-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (116, 58, 9, 3, '2024-07-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (117, 59, 8, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (118, 59, 5, 2, '2024-02-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (119, 59, 2, 3, '2024-02-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (120, 59, 9, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (121, 61, 4, 1, '2025-04-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (122, 62, 7, 1, '2025-11-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (123, 62, 4, 2, '2025-11-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (124, 63, 10, 1, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (125, 63, 7, 2, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (126, 63, 4, 3, '2025-06-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (127, 64, 3, 1, '2025-01-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (128, 64, 10, 2, '2025-01-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (129, 64, 7, 3, '2025-01-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (130, 64, 4, 1, '2025-01-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (131, 66, 9, 1, '2025-03-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (132, 67, 2, 1, '2025-10-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (133, 67, 9, 2, '2025-10-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (134, 68, 5, 1, '2025-06-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (135, 68, 2, 2, '2025-06-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (136, 68, 9, 3, '2025-06-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (137, 69, 8, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (138, 69, 5, 2, '2025-01-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (139, 69, 2, 3, '2025-01-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (140, 69, 9, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (141, 71, 4, 1, '2025-03-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (142, 72, 7, 1, '2025-10-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (143, 72, 4, 2, '2025-10-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (144, 73, 10, 1, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (145, 73, 7, 2, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (146, 73, 4, 3, '2025-05-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (147, 74, 3, 1, '2025-12-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (148, 74, 10, 2, '2025-12-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (149, 74, 7, 3, '2025-12-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (150, 74, 4, 1, '2025-12-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (151, 76, 9, 1, '2025-02-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (152, 77, 2, 1, '2025-09-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (153, 77, 9, 2, '2025-09-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (154, 78, 5, 1, '2025-04-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (155, 78, 2, 2, '2025-04-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (156, 78, 9, 3, '2025-04-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (157, 79, 8, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (158, 79, 5, 2, '2025-11-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (159, 79, 2, 3, '2025-11-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (160, 79, 9, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (161, 81, 4, 1, '2025-01-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (162, 82, 7, 1, '2025-08-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (163, 82, 4, 2, '2025-08-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (164, 83, 10, 1, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (165, 83, 7, 2, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (166, 83, 4, 3, '2025-03-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (167, 84, 3, 1, '2025-10-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (168, 84, 10, 2, '2025-10-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (169, 84, 7, 3, '2025-10-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (170, 84, 4, 1, '2025-10-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (171, 86, 9, 1, '2025-01-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (172, 87, 2, 1, '2025-08-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (173, 87, 9, 2, '2025-08-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (174, 88, 5, 1, '2025-03-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (175, 88, 2, 2, '2025-03-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (176, 88, 9, 3, '2025-03-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (177, 89, 8, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (178, 89, 5, 2, '2025-10-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (179, 89, 2, 3, '2025-10-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (180, 89, 9, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (181, 91, 4, 1, '2025-12-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (182, 92, 7, 1, '2025-07-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (183, 92, 4, 2, '2025-07-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (184, 93, 10, 1, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (185, 93, 7, 2, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (186, 93, 4, 3, '2025-02-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (187, 94, 3, 1, '2025-09-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (188, 94, 10, 2, '2025-09-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (189, 94, 7, 3, '2025-09-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (190, 94, 4, 1, '2025-09-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (191, 96, 9, 1, '2025-11-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (192, 97, 2, 1, '2025-06-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (193, 97, 9, 2, '2025-06-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (194, 98, 5, 1, '2025-01-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (195, 98, 2, 2, '2025-01-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (196, 98, 9, 3, '2025-01-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (197, 99, 8, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (198, 99, 5, 2, '2025-08-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (199, 99, 2, 3, '2025-08-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (200, 99, 9, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));`,
    questions: [
      {
        id: 1,
        title: "Question 1: Create Hospital Management System Tables (Patients & Doctors ERD)",
        description: "Create tables derived from ERD: Patients (patientID PK, email multi-valued -> PatientsEmail, name composite with firstName, surname), Departments (departmentID PK, name), Doctors (SSN PK, FullName, Specialty, departmentID FK), Appointments (appointmentTime PK, status, patientID FK, doctorSSN FK).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Patients (\n    patientID INT PRIMARY KEY,\n    firstName NVARCHAR(50),\n    surname NVARCHAR(50)\n);",
        solutionSQL: `CREATE TABLE Patients (\n    patientID INT PRIMARY KEY,\n    firstName NVARCHAR(50),\n    surname NVARCHAR(50)\n);\n\nCREATE TABLE PatientsEmail (\n    patientID INT,\n    email NVARCHAR(20),\n    PRIMARY KEY (patientID, email),\n    FOREIGN KEY (patientID) REFERENCES Patients(patientID)\n);\n\nCREATE TABLE Departments (\n    departmentID INT PRIMARY KEY,\n    name NVARCHAR(100)\n);\n\nCREATE TABLE Doctors (\n    SSN NVARCHAR(20) PRIMARY KEY,\n    FullName NVARCHAR(100),\n    Specialty NVARCHAR(60),\n    departmentID INT,\n    FOREIGN KEY (departmentID) REFERENCES Departments(departmentID)\n);\n\nCREATE TABLE Appointments (\n    appointmentTime DATETIME,\n    status NVARCHAR(50),\n    patientID INT,\n    doctorSSN NVARCHAR(20),\n    PRIMARY KEY (appointmentTime, patientID, doctorSSN),\n    FOREIGN KEY (patientID) REFERENCES Patients(patientID),\n    FOREIGN KEY (doctorSSN) REFERENCES Doctors(SSN)\n);`
      },
      {
        id: 2,
        title: "Question 2: Select all services with unit price between 10 and 30",
        description: "Write an SQL query to list all services whose unit price is between 10 and 30 (inclusive).",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT ServiceID, ServiceName, Category, UnitPrice, Unit FROM Service WHERE UnitPrice BETWEEN 10 AND 30 ORDER BY ServiceID;"
      },
      {
        id: 3,
        title: "Question 3: Guests registered between March 1 and May 31, 2024",
        description: "Write an SQL query to return all information about guests created between March 1, 2024 and May 31, 2024 (inclusive).",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT * FROM Guest WHERE CreatedAt >= '2024-03-01' AND CreatedAt <= '2024-05-31 23:59:59' ORDER BY GuestID;"
      },
      {
        id: 4,
        title: "Question 4: Bookings by French guests with Service information",
        description: "Write an SQL query to display booking and service details for all French guests, including guests with no bookings.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT g.GuestID, g.FirstName, g.LastName, b.BookingID, b.BookingDate, s.ServiceName, bs.TotalCost FROM Guest g LEFT JOIN Booking b ON g.GuestID = b.GuestID LEFT JOIN BookingService bs ON b.BookingID = bs.BookingID LEFT JOIN Service s ON bs.ServiceID = s.ServiceID WHERE g.Nationality = 'French' ORDER BY b.BookingDate DESC;"
      },
      {
        id: 5,
        title: "Question 5: Total Bookings and Revenue by Room Category",
        description: "Calculate total bookings, total nights, and total revenue for each RoomType in 2024.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT rt.RoomTypeID, rt.TypeName, COUNT(DISTINCT b.BookingID) AS TotalBookings, COALESCE(SUM(bd.SubTotal), 0) AS TotalRevenue FROM RoomType rt LEFT JOIN Room r ON rt.RoomTypeID = r.RoomTypeID LEFT JOIN BookingDetail bd ON r.RoomID = bd.RoomID LEFT JOIN Booking b ON bd.BookingID = b.BookingID AND strftime('%Y', b.BookingDate) = '2024' GROUP BY rt.RoomTypeID, rt.TypeName ORDER BY TotalRevenue DESC;"
      },
      {
        id: 6,
        title: "Question 6: Guests with more than 2 bookings in 2024",
        description: "List all guests who have made more than 2 bookings in year 2024.",
        initialCode: "-- Question 6: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT g.GuestID, g.FirstName || ' ' || g.LastName AS FullName, COUNT(b.BookingID) AS BookingCount FROM Guest g JOIN Booking b ON g.GuestID = b.GuestID WHERE strftime('%Y', b.BookingDate) = '2024' GROUP BY g.GuestID, FullName HAVING COUNT(b.BookingID) > 2 ORDER BY BookingCount DESC;"
      },
      {
        id: 7,
        title: "Question 7: Highest Revenue Service in Hotel",
        description: "Find the top 3 services generating the highest total revenue across all bookings.",
        initialCode: "-- Question 7: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT s.ServiceID, s.ServiceName, SUM(bs.TotalCost) AS TotalRevenue FROM Service s JOIN BookingService bs ON s.ServiceID = bs.ServiceID GROUP BY s.ServiceID, s.ServiceName ORDER BY TotalRevenue DESC LIMIT 3;"
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure updateGuestPhone (T-SQL Reference)",
        description: "Write a stored procedure updateGuestPhone(@guestID INT, @newPhone VARCHAR(20)) to update a guest phone number with validation.",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE updateGuestPhone\n    @guestID INT,\n    @newPhone VARCHAR(20)\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE updateGuestPhone\n    @guestID INT,\n    @newPhone VARCHAR(20)\nAS\nBEGIN\n    IF NOT EXISTS (SELECT 1 FROM Guest WHERE GuestID = @guestID)\n    BEGIN\n        PRINT 'Guest does not exist'\n        RETURN 1\n    END\n    UPDATE Guest SET Phone = @newPhone WHERE GuestID = @guestID\n    RETURN 0\nEND`
      },
      {
        id: 9,
        title: "Question 9: Trigger trg_CheckRoomAvailability (T-SQL Reference)",
        description: "Write a trigger to ensure rooms marked as 'Maintenance' cannot be booked in BookingDetail.",
        initialCode: "-- Question 9: Trigger (T-SQL Reference)\nCREATE TRIGGER trg_CheckRoomAvailability\nON BookingDetail\nINSTEAD OF INSERT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE TRIGGER trg_CheckRoomAvailability\nON BookingDetail\nINSTEAD OF INSERT\nAS\nBEGIN\n    INSERT INTO BookingDetail (BookingID, RoomID, PricePerNight, NumNights)\n    SELECT i.BookingID, i.RoomID, i.PricePerNight, i.NumNights\n    FROM inserted i\n    JOIN Room r ON i.RoomID = r.RoomID\n    WHERE r.Status <> 'Maintenance';\nEND`
      },
      {
        id: 10,
        title: "Question 10: Update Booking Status for overdue payments",
        description: "Update Status to 'Cancelled' for bookings where PaymentStatus is 'Failed' and BookingDate is before 2024-06-01.",
        initialCode: "-- Question 10: Write your UPDATE SQL here\nUPDATE Booking\nSET Status = ",
        solutionSQL: "UPDATE Booking SET Status = 'Cancelled' WHERE PaymentStatus = 'Failed' AND BookingDate < '2024-06-01';"
      }
    ]
  },

  // ==================== EXAM 3 ====================
  {
    id: 'pe_exam3',
    code: 'DBI202_PE_SU2026_HOTEL_3',
    title: 'PE DBI202 - Đề 3 (Summer 2026)',
    subtitle: 'Hotel Booking System • Mã Đề 3',
    description: 'Đề thi thực hành PE SQL Summer 2026 (Bộ đề 3): Chen ERD Thư viện, truy vấn phòng Deluxe/Suite, phân tích thời gian lưu trú & Subquery.',
    icon: '🏨',
    badgeClass: 'badge-db',
    themeColor: '#6366f1',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #a855f7 100%)',
    erdDiagramHtml: hotelBookingERDSvg,
    schemaDetails: hotelSchemaDetails,
    dbScript: `-- ============================================================
-- 1. RoomType
-- ============================================================
CREATE TABLE RoomType (
    RoomTypeID   INT            PRIMARY KEY,
    TypeName     VARCHAR(50)   NOT NULL UNIQUE,
    Description  VARCHAR(255)  NULL,
    BasePrice    DECIMAL(10,2) NOT NULL CHECK (BasePrice > 0),
    MaxOccupancy INTEGER       NOT NULL CHECK (MaxOccupancy BETWEEN 1 AND 10)
);
-- ============================================================
-- 2. Room
-- ============================================================
CREATE TABLE Room (
    RoomID     INT          PRIMARY KEY,
    RoomNumber VARCHAR(10) NOT NULL UNIQUE,
    RoomTypeID INT         NOT NULL,
    Floor      INTEGER     NOT NULL CHECK (Floor >= 1),
    Status     VARCHAR(20) NOT NULL DEFAULT 'Available'
                           CHECK (Status IN ('Available','Occupied','Maintenance','Reserved')),
    FOREIGN KEY (RoomTypeID) REFERENCES RoomType(RoomTypeID)
);
-- ============================================================
-- 3. Guest
-- ============================================================
CREATE TABLE Guest (
    GuestID     INT            PRIMARY KEY,
    FirstName   VARCHAR(50)   NOT NULL,
    LastName    VARCHAR(50)   NOT NULL,
    Email       VARCHAR(100)  NOT NULL UNIQUE,
    Phone       VARCHAR(20)   NULL,
    NationalID  VARCHAR(30)   NULL UNIQUE,
    Nationality VARCHAR(50)   NULL,
    DateOfBirth DATE          NULL,
    CreatedAt   TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- ============================================================
-- 4. Booking
-- ============================================================
CREATE TABLE Booking (
    BookingID    INT            PRIMARY KEY,
    GuestID      INT           NOT NULL,
    BookingDate  TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CheckInDate  DATE          NOT NULL,
    CheckOutDate DATE          NOT NULL,
    Status       VARCHAR(20)   NOT NULL DEFAULT 'Confirmed'
                               CHECK (Status IN ('Confirmed','Checked-In','Checked-Out','Cancelled','No-Show')),
    TotalAmount  DECIMAL(10,2) NOT NULL DEFAULT 0,
	PaymentDate datetime NULL DEFAULT CURRENT_TIMESTAMP,
	PaymentMethod varchar(30) NULL CHECK (PaymentMethod IN ('Cash','Credit Card','Debit Card','Bank Transfer','Online')),
	PaymentStatus varchar(20) NULL DEFAULT 'Completed'
                                CHECK (PaymentStatus IN ('Completed','Pending','Refunded','Failed')),
    Notes        VARCHAR(500)  NULL,
    FOREIGN KEY (GuestID) REFERENCES Guest(GuestID),
    CHECK (CheckOutDate > CheckInDate)
);
-- ============================================================
-- 5. BookingDetail  (1-3 rooms per booking)
-- ============================================================
CREATE TABLE BookingDetail (
    DetailID      INT            PRIMARY KEY,
    BookingID     INT           NOT NULL,
    RoomID        INT           NOT NULL,
    PricePerNight DECIMAL(10,2) NOT NULL CHECK (PricePerNight > 0),
    NumNights     INTEGER      NOT NULL CHECK (NumNights > 0),
    SubTotal DECIMAL(10,2) GENERATED ALWAYS AS (PricePerNight * NumNights) STORED,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (RoomID)    REFERENCES Room(RoomID),
    UNIQUE (BookingID, RoomID)
);
-- ============================================================
-- 6. BookingGuest  (1-4 occupants per BookingDetail)
-- ============================================================
CREATE TABLE BookingGuest (
    BookingGuestID  INT           PRIMARY KEY,
    DetailID        INT          NOT NULL,
    GuestID         INT          NOT NULL,
    IsPrimaryGuest  INTEGER          NOT NULL DEFAULT 0,
    FOREIGN KEY (DetailID) REFERENCES BookingDetail(DetailID),
    FOREIGN KEY (GuestID)  REFERENCES Guest(GuestID),
    UNIQUE (DetailID, GuestID)
);
-- ============================================================
-- 7. Service
-- ============================================================
CREATE TABLE Service (
    ServiceID   INT            PRIMARY KEY,
    ServiceName VARCHAR(100)  NOT NULL UNIQUE,
    Category    VARCHAR(50)   NOT NULL,
    UnitPrice   DECIMAL(10,2) NOT NULL CHECK (UnitPrice >= 0),
    Unit        VARCHAR(30)   NOT NULL DEFAULT 'per use'
);
-- ============================================================
-- 8. BookingService  (0-4 services per booking)
-- ============================================================
CREATE TABLE BookingService (
    BookingServiceID INT       PRIMARY KEY,
    BookingID        INT      NOT NULL,
    ServiceID        INT      NOT NULL,
    Quantity         INTEGER NOT NULL DEFAULT 1 CHECK (Quantity > 0),
    ServiceDate      DATE     NOT NULL DEFAULT CURRENT_DATE,
    TotalCost        DECIMAL(10,2) NULL,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
);
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (1, 'Alice', 'Nguyen', 'alice.nguyen1@email.com', '0900000001', 'NID0001', 'Vietnamese', '1970-01-01', '2023-12-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (2, 'Bob', 'Smith', 'bob.smith2@email.com', '0900000002', 'NID0002', 'American', '1981-08-14', '2023-12-25 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (3, 'Chen', 'Wei', 'chen.wei3@email.com', '0900000003', 'NID0003', 'Chinese', '1992-03-27', '2024-03-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (4, 'Maria', 'Garcia', 'maria.garcia4@email.com', '0900000004', 'NID0004', 'Spanish', '2003-10-12', '2024-02-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (5, 'Hiroshi', 'Tanaka', 'hiroshi.tanaka5@email.com', '0900000005', 'NID0005', 'Japanese', '1979-05-25', '2024-05-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (6, 'Linh', 'Tran', 'linh.tran6@email.com', '0900000006', 'NID0006', 'Vietnamese', '1990-12-10', '2024-05-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (7, 'James', 'Wilson', 'james.wilson7@email.com', '0900000007', 'NID0007', 'British', '2001-07-23', '2024-07-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (8, 'Sophie', 'Pham', 'sophie.pham8@email.com', '0900000008', 'NID0008', 'Vietnamese', '1977-02-08', '2024-02-14 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (9, 'Linda', 'Le', 'linda.le9@email.com', '0900000009', 'NID0009', 'Chinese', '1988-09-21', '2024-02-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (10, 'Carlos', 'Rodriguez', 'carlos.rodriguez10@email.com', '0900000010', 'NID0010', 'Spanish', '1999-04-06', '2024-03-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (11, 'Yuki', 'Suzuki', 'yuki.suzuki11@email.com', '0900000011', 'NID0011', 'Japanese', '1975-11-19', '2024-10-26 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (12, 'Emily', 'Johnson', 'emily.johnson12@email.com', '0900000012', 'NID0012', 'American', '1986-06-04', '2024-05-28 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (13, 'David', 'Brown', 'david.brown13@email.com', '0900000013', 'NID0013', 'British', '1997-01-17', '2023-12-30 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (14, 'Sarah', 'Martinez', 'sarah.martinez14@email.com', '0900000014', 'NID0014', 'Spanish', '1973-08-02', '2024-08-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (15, 'Ahmed', 'Ali', 'ahmed.ali15@email.com', '0900000015', 'NID0015', 'Egyptian', '1984-03-15', '2024-03-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (16, 'Fatima', 'Hassan', 'fatima.hassan16@email.com', '0900000016', 'NID0016', 'Egyptian', '1995-10-28', '2024-10-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (17, 'Pierre', 'Dupont', 'pierre.dupont17@email.com', '0900000017', 'NID0017', 'French', '1971-05-13', '2024-05-21 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (18, 'Isabelle', 'Laurent', 'isabelle.laurent18@email.com', '0900000018', 'NID0018', 'French', '1982-12-26', '2023-12-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (19, 'Nguyen', 'Hoang', 'nguyen.hoang19@email.com', '0900000019', 'NID0019', 'Vietnamese', '1993-07-11', '2024-07-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (20, 'Tran', 'Dao', 'tran.dao20@email.com', '0900000020', 'NID0020', 'Vietnamese', '2004-02-24', '2024-03-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (21, 'Michael', 'Johnson', 'michael.johnson21@email.com', '0900000021', 'NID0021', 'American', '1980-09-09', '2024-10-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (22, 'Anna', 'Kovacs', 'anna.kovacs22@email.com', '0900000022', 'NID0022', 'Hungarian', '1991-04-22', '2024-05-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (23, 'Ravi', 'Sharma', 'ravi.sharma23@email.com', '0900000023', 'NID0023', 'Indian', '2002-11-07', '2024-12-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (24, 'Priya', 'Patel', 'priya.patel24@email.com', '0900000024', 'NID0024', 'Indian', '1978-06-20', '2024-07-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (25, 'Lars', 'Eriksson', 'lars.eriksson25@email.com', '0900000025', 'NID0025', 'Swedish', '1989-01-05', '2024-02-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (26, 'Astrid', 'Hansen', 'astrid.hansen26@email.com', '0900000026', 'NID0026', 'Norwegian', '2000-08-18', '2024-08-20 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (27, 'Omar', 'Ibrahim', 'omar.ibrahim27@email.com', '0900000027', 'NID0027', 'Jordanian', '1976-03-03', '2024-03-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (28, 'Layla', 'Mansour', 'layla.mansour28@email.com', '0900000028', 'NID0028', 'Lebanese', '1987-10-16', '2024-10-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (29, 'Marco', 'Rossi', 'marco.rossi29@email.com', '0900000029', 'NID0029', 'Italian', '1998-05-01', '2024-06-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (30, 'Giulia', 'Ferrari', 'giulia.ferrari30@email.com', '0900000030', 'NID0030', 'Italian', '1974-12-14', '2024-01-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (31, 'Kenji', 'Yamamoto', 'kenji.yamamoto31@email.com', '0900000031', 'NID0031', 'Japanese', '1985-07-27', '2024-08-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (32, 'Sakura', 'Nakamura', 'sakura.nakamura32@email.com', '0900000032', 'NID0032', 'Japanese', '1996-02-12', '2024-03-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (33, 'Hassan', 'Al-Farsi', 'hassan.al-farsi33@email.com', '0900000033', 'NID0033', 'Omani', '1972-09-25', '2024-10-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (34, 'Amira', 'Khalil', 'amira.khalil34@email.com', '0900000034', 'NID0034', 'Jordanian', '1983-04-10', '2024-05-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (35, 'Luke', 'Anderson', 'luke.anderson35@email.com', '0900000035', 'NID0035', 'Australian', '1994-11-23', '2023-12-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (36, 'Emma', 'Thomas', 'emma.thomas36@email.com', '0900000036', 'NID0036', 'British', '1970-06-08', '2024-07-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (37, 'Ivan', 'Petrov', 'ivan.petrov37@email.com', '0900000037', 'NID0037', 'Russian', '1981-01-21', '2024-02-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (38, 'Natasha', 'Ivanova', 'natasha.ivanova38@email.com', '0900000038', 'NID0038', 'Russian', '1992-08-06', '2024-10-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (39, 'Wei', 'Liu', 'wei.liu39@email.com', '0900000039', 'NID0039', 'Chinese', '2003-03-19', '2024-05-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (40, 'Mei', 'Zhang', 'mei.zhang40@email.com', '0900000040', 'NID0040', 'Chinese', '1979-10-04', '2024-12-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (41, 'Thomas', 'Mueller', 'thomas.mueller41@email.com', '0900000041', 'NID0041', 'German', '1990-05-17', '2024-07-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (42, 'Claire', 'Wagner', 'claire.wagner42@email.com', '0900000042', 'NID0042', 'German', '2001-12-02', '2024-02-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (43, 'Alex', 'Taylor', 'alex.taylor43@email.com', '0900000043', 'NID0043', 'Australian', '1977-07-15', '2024-09-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (44, 'Jordan', 'Morgan', 'jordan.morgan44@email.com', '0900000044', 'NID0044', 'British', '1988-02-28', '2024-04-03 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (45, 'Sam', 'Davis', 'sam.davis45@email.com', '0900000045', 'NID0045', 'American', '1999-09-13', '2024-11-05 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (46, 'Taylor', 'Robinson', 'taylor.robinson46@email.com', '0900000046', 'NID0046', 'British', '1975-04-26', '2024-06-07 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (47, 'Lee', 'Park', 'lee.park47@email.com', '0900000047', 'NID0047', 'Korean', '1986-11-11', '2024-01-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (48, 'Kim', 'Choi', 'kim.choi48@email.com', '0900000048', 'NID0048', 'Korean', '1997-06-24', '2024-08-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (49, 'Raj', 'Singh', 'raj.singh49@email.com', '0900000049', 'NID0049', 'Indian', '1973-01-09', '2024-03-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (50, 'Aisha', 'Osei', 'aisha.osei50@email.com', '0900000050', 'NID0050', 'Ghanaian', '1984-08-22', '2024-10-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (51, 'Aisha', 'Osaki', 'aisha.osaki51@email.com', '0978900050', 'NID0051', 'Japanese', '1990-08-22', '2024-11-15 00:00:00');
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (1, 'Standard', 'Cozy room with basic amenities', CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (2, 'Deluxe', 'Spacious room with city or garden view', CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (3, 'Suite', 'Luxury suite with living area and minibar', CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (4, 'Family', 'Large room with two queen beds', CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (5, 'Penthouse', 'Top-floor suite with panoramic view and pool', CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (1, 'Breakfast Buffet', 'Food & Beverage', CAST(15.00 AS Decimal(10, 2)), 'per person per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (2, 'Breakfast Room Service', 'Food & Beverage', CAST(10.00 AS Decimal(10, 2)), 'per order');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (3, 'Airport Transfer', 'Transport', CAST(25.00 AS Decimal(10, 2)), 'per trip');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (4, 'Laundry Service', 'Housekeeping', CAST(8.00 AS Decimal(10, 2)), 'per bag');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (5, 'Spa & Massage', 'Wellness', CAST(50.00 AS Decimal(10, 2)), 'per session');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (6, 'Mini Bar Refill', 'Food & Beverage', CAST(20.00 AS Decimal(10, 2)), 'per refill');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (7, 'Parking', 'Transport', CAST(5.00 AS Decimal(10, 2)), 'per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (8, 'Swimming Pool', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (9, 'Gym Access', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (10, 'Business Center', 'Business', CAST(10.00 AS Decimal(10, 2)), 'per hour');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (1, '101', 1, 1, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (2, '102', 1, 1, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (3, '201', 1, 2, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (4, '202', 1, 2, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (5, '301', 1, 3, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (6, '302', 1, 3, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (7, '401', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (8, '402', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (9, '403', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (10, '404', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (11, '501', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (12, '502', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (13, '503', 2, 5, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (14, '504', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (15, '601', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (16, '602', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (17, '603', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (18, '604', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (19, '605', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (20, '606', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (21, '701', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (22, '702', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (23, '703', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (24, '704', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (25, '705', 4, 7, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (26, '706', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (27, '801', 5, 8, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (28, '802', 5, 8, 'Maintenance');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (29, '803', 5, 8, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (30, '804', 5, 8, 'Available');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (1, 1, '2023-12-31 00:00:00', '2024-01-01', '2024-01-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-01-02 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (2, 1, '2024-08-02 00:00:00', '2024-08-04', '2024-08-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-08-06 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (3, 1, '2024-03-04 00:00:00', '2024-03-07', '2024-03-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-03-10 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (4, 1, '2024-10-06 00:00:00', '2024-10-10', '2024-10-14', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-10-14 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (5, 2, '2024-05-08 00:00:00', '2024-05-13', '2024-05-18', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-05-18 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (6, 2, '2024-12-10 00:00:00', '2024-12-16', '2024-12-22', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-12-22 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (7, 2, '2024-07-12 00:00:00', '2024-07-19', '2024-07-26', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-07-26 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (8, 2, '2024-02-14 00:00:00', '2024-02-22', '2024-02-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-02-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (9, 3, '2024-09-16 00:00:00', '2024-09-25', '2024-09-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-09-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (10, 3, '2024-03-24 00:00:00', '2024-04-03', '2024-04-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-04-06 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (11, 3, '2024-10-26 00:00:00', '2024-11-06', '2024-11-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-10 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (12, 3, '2024-05-28 00:00:00', '2024-06-09', '2024-06-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-14 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (13, 4, '2023-12-30 00:00:00', '2024-01-12', '2024-01-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-18 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (14, 4, '2024-08-01 00:00:00', '2024-08-15', '2024-08-22', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-08-22 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (15, 4, '2024-03-17 00:00:00', '2024-03-18', '2024-03-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (16, 4, '2024-10-19 00:00:00', '2024-10-21', '2024-10-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-10-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (17, 5, '2024-05-21 00:00:00', '2024-05-24', '2024-05-27', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-05-27 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (18, 5, '2023-12-29 00:00:00', '2024-01-02', '2024-01-06', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-01-06 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (19, 5, '2024-07-31 00:00:00', '2024-08-05', '2024-08-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-08-10 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (20, 5, '2024-03-02 00:00:00', '2024-03-08', '2024-03-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-03-14 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (21, 6, '2024-10-04 00:00:00', '2024-10-11', '2024-10-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-10-18 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (22, 6, '2024-05-06 00:00:00', '2024-05-14', '2024-05-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-05-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (23, 6, '2024-12-08 00:00:00', '2024-12-17', '2024-12-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-12-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (24, 6, '2024-07-10 00:00:00', '2024-07-20', '2024-07-23', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-07-23 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (25, 7, '2024-02-12 00:00:00', '2024-02-23', '2024-02-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-02-27 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (26, 7, '2024-08-20 00:00:00', '2024-09-01', '2024-09-06', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-06 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (27, 7, '2024-03-22 00:00:00', '2024-04-04', '2024-04-10', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-10 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (28, 7, '2024-10-24 00:00:00', '2024-11-07', '2024-11-14', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-14 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (29, 8, '2024-06-09 00:00:00', '2024-06-10', '2024-06-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (30, 8, '2024-01-11 00:00:00', '2024-01-13', '2024-01-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (31, 8, '2024-08-13 00:00:00', '2024-08-16', '2024-08-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-08-19 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (32, 8, '2024-03-15 00:00:00', '2024-03-19', '2024-03-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-03-23 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (33, 9, '2024-10-17 00:00:00', '2024-10-22', '2024-10-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-10-27 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (34, 9, '2024-05-19 00:00:00', '2024-05-25', '2024-05-31', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-05-31 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (35, 9, '2023-12-27 00:00:00', '2024-01-03', '2024-01-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-01-10 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (36, 10, '2024-07-29 00:00:00', '2024-08-06', '2024-08-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-08-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (37, 10, '2024-02-29 00:00:00', '2024-03-09', '2024-03-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-03-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (38, 10, '2024-10-02 00:00:00', '2024-10-12', '2024-10-15', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-10-15 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (39, 11, '2024-05-04 00:00:00', '2024-05-15', '2024-05-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-05-19 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (40, 11, '2024-12-06 00:00:00', '2024-12-18', '2024-12-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-12-23 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (41, 11, '2024-07-08 00:00:00', '2024-07-21', '2024-07-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-27 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (42, 12, '2024-02-10 00:00:00', '2024-02-24', '2024-03-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-02 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (43, 12, '2024-09-01 00:00:00', '2024-09-02', '2024-09-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-03 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (44, 12, '2024-04-03 00:00:00', '2024-04-05', '2024-04-07', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-07 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (45, 13, '2024-11-05 00:00:00', '2024-11-08', '2024-11-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-11 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (46, 13, '2024-06-07 00:00:00', '2024-06-11', '2024-06-15', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-06-15 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (47, 13, '2024-01-09 00:00:00', '2024-01-14', '2024-01-19', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-01-19 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (48, 14, '2024-08-11 00:00:00', '2024-08-17', '2024-08-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-08-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (49, 14, '2024-03-13 00:00:00', '2024-03-20', '2024-03-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-03-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (50, 14, '2024-10-15 00:00:00', '2024-10-23', '2024-10-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-10-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (51, 15, '2024-05-23 00:00:00', '2024-06-01', '2024-06-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-06-03 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (52, 15, '2023-12-25 00:00:00', '2024-01-04', '2024-01-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-01-07 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (53, 15, '2024-07-27 00:00:00', '2024-08-07', '2024-08-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-08-11 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (54, 16, '2024-02-27 00:00:00', '2024-03-10', '2024-03-15', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-03-15 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (55, 16, '2024-09-30 00:00:00', '2024-10-13', '2024-10-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-10-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (56, 16, '2024-05-02 00:00:00', '2024-05-16', '2024-05-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-05-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (57, 17, '2024-12-18 00:00:00', '2024-12-19', '2024-12-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-12-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (58, 17, '2024-07-20 00:00:00', '2024-07-22', '2024-07-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (59, 17, '2024-02-22 00:00:00', '2024-02-25', '2024-02-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-02-28 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (60, 18, '2024-08-30 00:00:00', '2024-09-03', '2024-09-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-07 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (61, 18, '2025-04-01 00:00:00', '2025-04-06', '2025-04-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-04-11 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (62, 18, '2025-11-03 00:00:00', '2025-11-09', '2025-11-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-11-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (63, 19, '2025-06-05 00:00:00', '2025-06-12', '2025-06-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-06-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (64, 19, '2025-01-07 00:00:00', '2025-01-15', '2025-01-16', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-01-16 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (65, 20, '2025-08-09 00:00:00', '2025-08-18', '2025-08-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-08-20 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (66, 20, '2025-03-11 00:00:00', '2025-03-21', '2025-03-24', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-03-24 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (67, 21, '2025-10-13 00:00:00', '2025-10-24', '2025-10-28', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-10-28 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (68, 21, '2025-05-21 00:00:00', '2025-06-02', '2025-06-07', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-06-07 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (69, 22, '2024-12-23 00:00:00', '2025-01-05', '2025-01-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-01-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (70, 22, '2025-07-25 00:00:00', '2025-08-08', '2025-08-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-08-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (71, 23, '2025-03-10 00:00:00', '2025-03-11', '2025-03-12', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-12 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (72, 23, '2025-10-12 00:00:00', '2025-10-14', '2025-10-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-16 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (73, 24, '2025-05-14 00:00:00', '2025-05-17', '2025-05-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-20 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (74, 24, '2025-12-16 00:00:00', '2025-12-20', '2025-12-24', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-12-24 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (75, 25, '2025-07-18 00:00:00', '2025-07-23', '2025-07-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-07-28 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (76, 25, '2025-01-26 00:00:00', '2025-02-01', '2025-02-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-02-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (77, 26, '2025-08-28 00:00:00', '2025-09-04', '2025-09-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-09-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (78, 26, '2025-03-30 00:00:00', '2025-04-07', '2025-04-08', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-04-08 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (79, 27, '2025-11-01 00:00:00', '2025-11-10', '2025-11-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-11-12 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (80, 27, '2025-06-03 00:00:00', '2025-06-13', '2025-06-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-06-16 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (81, 28, '2025-01-05 00:00:00', '2025-01-16', '2025-01-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-01-20 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (82, 28, '2025-08-07 00:00:00', '2025-08-19', '2025-08-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-08-24 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (83, 29, '2025-03-09 00:00:00', '2025-03-22', '2025-03-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-03-28 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (84, 30, '2025-10-11 00:00:00', '2025-10-25', '2025-11-01', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-11-01 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (85, 31, '2025-06-02 00:00:00', '2025-06-03', '2025-06-04', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-06-04 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (86, 32, '2025-01-04 00:00:00', '2025-01-06', '2025-01-08', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-01-08 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (87, 33, '2025-08-06 00:00:00', '2025-08-09', '2025-08-12', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-08-12 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (88, 34, '2025-03-08 00:00:00', '2025-03-12', '2025-03-16', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-16 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (89, 35, '2025-10-10 00:00:00', '2025-10-15', '2025-10-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-20 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (90, 36, '2025-05-12 00:00:00', '2025-05-18', '2025-05-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (91, 37, '2025-12-14 00:00:00', '2025-12-21', '2025-12-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-12-28 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (92, 38, '2025-07-16 00:00:00', '2025-07-24', '2025-07-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-07-25 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (93, 39, '2025-01-24 00:00:00', '2025-02-02', '2025-02-04', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-02-04 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (94, 40, '2025-08-26 00:00:00', '2025-09-05', '2025-09-08', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-09-08 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (95, 41, '2025-03-28 00:00:00', '2025-04-08', '2025-04-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-04-12 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (96, 42, '2025-10-30 00:00:00', '2025-11-11', '2025-11-16', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-11-16 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (97, 43, '2025-06-01 00:00:00', '2025-06-14', '2025-06-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-06-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (98, 44, '2025-01-03 00:00:00', '2025-01-17', '2025-01-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-01-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (99, 45, '2025-08-19 00:00:00', '2025-08-20', '2025-08-21', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-08-21 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (100, 46, '2025-03-21 00:00:00', '2025-03-23', '2025-03-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-03-25 00:00:00', 'Cash', 'Completed');
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (1, 1, 1, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (2, 1, 2, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (3, 2, 3, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (4, 2, 4, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (5, 2, 5, CAST(96.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (6, 3, 6, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (7, 4, 7, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (8, 4, 8, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (9, 5, 9, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (10, 5, 10, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (11, 5, 11, CAST(180.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (12, 6, 12, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (13, 7, 13, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (14, 7, 14, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (15, 8, 15, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (16, 8, 16, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (17, 8, 17, CAST(360.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (18, 9, 18, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (19, 10, 19, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (20, 10, 20, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (21, 11, 21, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (22, 11, 22, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (23, 11, 23, CAST(240.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (24, 12, 24, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (25, 13, 25, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (26, 13, 26, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (27, 14, 27, CAST(600.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (28, 14, 28, CAST(660.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (29, 14, 29, CAST(720.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (30, 15, 30, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (31, 16, 1, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (32, 16, 2, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (33, 17, 3, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (34, 17, 4, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (35, 17, 5, CAST(96.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (36, 18, 6, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (37, 19, 7, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (38, 19, 8, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (39, 20, 9, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (40, 20, 10, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (41, 20, 11, CAST(180.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (42, 21, 12, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (43, 22, 13, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (44, 22, 14, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (45, 23, 15, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (46, 23, 16, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (47, 23, 17, CAST(360.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (48, 24, 18, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (49, 25, 19, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (50, 25, 20, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (51, 26, 21, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (52, 26, 22, CAST(220.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (53, 26, 23, CAST(240.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (54, 27, 24, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (55, 28, 25, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (56, 28, 26, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (57, 29, 27, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (58, 29, 28, CAST(660.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (59, 29, 29, CAST(720.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (60, 30, 30, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (61, 31, 1, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (62, 31, 2, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (63, 32, 3, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (64, 32, 4, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (65, 32, 5, CAST(96.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (66, 33, 6, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (67, 34, 7, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (68, 34, 8, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (69, 35, 9, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (70, 35, 10, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (71, 35, 11, CAST(180.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (72, 36, 12, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (73, 37, 13, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (74, 37, 14, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (75, 38, 15, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (76, 38, 16, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (77, 38, 17, CAST(360.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (78, 39, 18, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (79, 40, 19, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (80, 40, 20, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (81, 41, 21, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (82, 41, 22, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (83, 41, 23, CAST(240.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (84, 42, 24, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (85, 43, 25, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (86, 43, 26, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (87, 44, 27, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (88, 44, 28, CAST(660.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (89, 44, 29, CAST(720.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (90, 45, 30, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (91, 46, 1, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (92, 46, 2, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (93, 47, 3, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (94, 47, 4, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (95, 47, 5, CAST(96.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (96, 48, 6, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (97, 49, 7, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (98, 49, 8, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (99, 50, 9, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (100, 50, 10, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (101, 50, 11, CAST(180.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (102, 51, 12, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (103, 52, 13, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (104, 52, 14, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (105, 53, 15, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (106, 53, 16, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (107, 53, 17, CAST(360.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (108, 54, 18, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (109, 55, 19, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (110, 55, 20, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (111, 56, 21, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (112, 56, 22, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (113, 56, 23, CAST(240.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (114, 57, 24, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (115, 58, 25, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (116, 58, 26, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (117, 59, 27, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (118, 59, 28, CAST(660.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (119, 59, 29, CAST(720.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (120, 60, 30, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (121, 61, 1, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (122, 61, 2, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (123, 62, 3, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (124, 62, 4, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (125, 62, 5, CAST(96.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (126, 63, 6, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (127, 64, 7, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (128, 64, 8, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (129, 65, 9, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (130, 65, 10, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (131, 65, 11, CAST(180.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (132, 66, 12, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (133, 67, 13, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (134, 67, 14, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (135, 68, 15, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (136, 68, 16, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (137, 68, 17, CAST(360.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (138, 69, 18, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (139, 70, 19, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (140, 70, 20, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (141, 71, 21, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (142, 71, 22, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (143, 71, 23, CAST(240.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (144, 72, 24, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (145, 73, 25, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (146, 73, 26, CAST(220.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (147, 74, 27, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (148, 74, 28, CAST(660.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (149, 74, 29, CAST(720.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (150, 75, 30, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (151, 76, 1, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (152, 76, 2, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (153, 77, 3, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (154, 77, 4, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (155, 77, 5, CAST(96.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (156, 78, 6, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (157, 79, 7, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (158, 79, 8, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (159, 80, 9, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (160, 80, 10, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (161, 80, 11, CAST(180.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (162, 81, 12, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (163, 82, 13, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (164, 82, 14, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (165, 83, 15, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (166, 83, 16, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (167, 83, 17, CAST(360.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (168, 84, 18, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (169, 85, 19, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (170, 85, 20, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (171, 86, 21, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (172, 86, 22, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (173, 86, 23, CAST(240.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (174, 87, 24, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (175, 88, 25, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (176, 88, 26, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (177, 89, 27, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (178, 89, 28, CAST(660.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (179, 89, 29, CAST(720.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (180, 90, 30, CAST(600.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (181, 91, 1, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (182, 91, 2, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (183, 92, 3, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (184, 92, 4, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (185, 92, 5, CAST(96.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (186, 93, 6, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (187, 94, 7, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (188, 94, 8, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (189, 95, 9, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (190, 95, 10, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (191, 95, 11, CAST(180.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (192, 96, 12, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (193, 97, 13, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (194, 97, 14, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (195, 98, 15, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (196, 98, 16, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (197, 98, 17, CAST(360.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (198, 99, 18, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (199, 100, 19, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (200, 100, 20, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (1, 1, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (2, 1, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (3, 2, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (4, 2, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (5, 3, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (6, 3, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (7, 4, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (8, 5, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (9, 5, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (10, 6, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (11, 6, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (12, 7, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (13, 7, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (14, 8, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (15, 9, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (16, 9, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (17, 10, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (18, 10, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (19, 11, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (20, 11, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (21, 12, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (22, 13, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (23, 13, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (24, 14, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (25, 14, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (26, 15, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (27, 15, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (28, 15, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (29, 15, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (30, 16, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (31, 17, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (32, 17, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (33, 18, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (34, 18, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (35, 18, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (36, 19, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (37, 19, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (38, 19, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (39, 19, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (40, 20, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (41, 21, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (42, 21, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (43, 22, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (44, 22, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (45, 22, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (46, 23, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (47, 23, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (48, 23, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (49, 23, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (50, 24, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (51, 25, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (52, 25, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (53, 26, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (54, 26, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (55, 26, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (56, 27, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (57, 27, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (58, 27, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (59, 27, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (60, 28, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (61, 29, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (62, 29, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (63, 30, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (64, 30, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (65, 30, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (66, 31, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (67, 31, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (68, 32, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (69, 33, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (70, 33, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (71, 34, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (72, 34, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (73, 35, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (74, 35, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (75, 36, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (76, 37, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (77, 37, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (78, 38, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (79, 38, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (80, 39, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (81, 39, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (82, 40, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (83, 41, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (84, 41, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (85, 42, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (86, 42, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (87, 43, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (88, 43, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (89, 44, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (90, 45, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (91, 45, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (92, 46, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (93, 46, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (94, 46, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (95, 47, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (96, 47, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (97, 47, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (98, 47, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (99, 48, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (100, 49, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (101, 49, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (102, 50, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (103, 50, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (104, 50, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (105, 51, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (106, 51, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (107, 51, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (108, 51, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (109, 52, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (110, 53, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (111, 53, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (112, 54, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (113, 54, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (114, 54, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (115, 55, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (116, 55, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (117, 55, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (118, 55, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (119, 56, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (120, 57, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (121, 57, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (122, 58, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (123, 58, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (124, 58, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (125, 59, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (126, 59, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (127, 59, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (128, 59, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (129, 60, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (130, 61, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (131, 61, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (132, 62, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (133, 62, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (134, 63, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (135, 63, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (136, 64, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (137, 65, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (138, 65, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (139, 66, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (140, 66, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (141, 67, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (142, 67, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (143, 68, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (144, 69, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (145, 69, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (146, 70, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (147, 70, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (148, 71, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (149, 71, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (150, 72, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (151, 73, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (152, 73, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (153, 74, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (154, 74, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (155, 75, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (156, 75, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (157, 75, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (158, 75, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (159, 76, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (160, 77, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (161, 77, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (162, 78, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (163, 78, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (164, 78, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (165, 79, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (166, 79, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (167, 79, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (168, 79, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (169, 80, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (170, 81, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (171, 81, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (172, 82, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (173, 82, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (174, 82, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (175, 83, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (176, 83, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (177, 83, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (178, 83, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (179, 84, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (180, 85, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (181, 85, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (182, 86, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (183, 86, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (184, 86, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (185, 87, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (186, 87, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (187, 87, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (188, 87, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (189, 88, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (190, 89, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (191, 89, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (192, 90, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (193, 90, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (194, 90, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (195, 91, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (196, 91, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (197, 92, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (198, 93, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (199, 93, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (200, 94, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (201, 94, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (202, 95, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (203, 95, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (204, 96, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (205, 97, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (206, 97, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (207, 98, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (208, 98, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (209, 99, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (210, 99, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (211, 100, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (212, 101, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (213, 101, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (214, 102, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (215, 102, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (216, 103, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (217, 103, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (218, 104, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (219, 105, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (220, 105, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (221, 106, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (222, 106, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (223, 106, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (224, 107, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (225, 107, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (226, 107, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (227, 107, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (228, 108, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (229, 109, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (230, 109, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (231, 110, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (232, 110, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (233, 110, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (234, 111, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (235, 111, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (236, 111, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (237, 111, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (238, 112, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (239, 113, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (240, 113, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (241, 114, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (242, 114, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (243, 114, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (244, 115, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (245, 115, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (246, 115, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (247, 115, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (248, 116, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (249, 117, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (250, 117, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (251, 118, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (252, 118, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (253, 118, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (254, 119, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (255, 119, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (256, 119, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (257, 119, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (258, 120, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (259, 121, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (260, 121, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (261, 122, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (262, 122, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (263, 123, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (264, 123, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (265, 124, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (266, 125, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (267, 125, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (268, 126, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (269, 126, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (270, 127, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (271, 127, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (272, 128, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (273, 129, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (274, 129, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (275, 130, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (276, 130, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (277, 131, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (278, 131, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (279, 132, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (280, 133, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (281, 133, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (282, 134, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (283, 134, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (284, 135, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (285, 135, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (286, 135, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (287, 135, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (288, 136, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (289, 137, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (290, 137, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (291, 138, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (292, 138, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (293, 138, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (294, 139, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (295, 139, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (296, 139, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (297, 139, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (298, 140, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (299, 141, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (300, 141, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (301, 142, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (302, 142, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (303, 142, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (304, 143, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (305, 143, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (306, 143, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (307, 143, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (308, 144, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (309, 145, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (310, 145, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (311, 146, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (312, 146, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (313, 146, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (314, 147, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (315, 147, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (316, 147, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (317, 147, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (318, 148, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (319, 149, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (320, 149, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (321, 150, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (322, 150, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (323, 150, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (324, 151, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (325, 151, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (326, 152, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (327, 153, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (328, 153, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (329, 154, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (330, 154, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (331, 155, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (332, 155, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (333, 156, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (334, 157, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (335, 157, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (336, 158, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (337, 158, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (338, 159, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (339, 159, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (340, 160, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (341, 161, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (342, 161, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (343, 162, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (344, 162, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (345, 163, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (346, 163, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (347, 164, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (348, 165, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (349, 165, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (350, 166, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (351, 166, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (352, 166, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (353, 167, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (354, 167, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (355, 167, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (356, 167, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (357, 168, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (358, 169, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (359, 169, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (360, 170, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (361, 170, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (362, 170, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (363, 171, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (364, 171, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (365, 171, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (366, 171, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (367, 172, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (368, 173, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (369, 173, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (370, 174, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (371, 174, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (372, 174, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (373, 175, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (374, 175, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (375, 175, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (376, 175, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (377, 176, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (378, 177, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (379, 177, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (380, 178, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (381, 178, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (382, 178, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (383, 179, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (384, 179, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (385, 179, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (386, 179, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (387, 180, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (388, 181, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (389, 181, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (390, 182, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (391, 182, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (392, 183, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (393, 183, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (394, 184, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (395, 185, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (396, 185, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (397, 186, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (398, 186, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (399, 187, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (400, 187, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (401, 188, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (402, 189, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (403, 189, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (404, 190, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (405, 190, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (406, 191, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (407, 191, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (408, 192, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (409, 193, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (410, 193, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (411, 194, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (412, 194, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (413, 195, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (414, 195, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (415, 195, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (416, 195, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (417, 196, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (418, 197, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (419, 197, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (420, 198, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (421, 198, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (422, 198, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (423, 199, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (424, 199, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (425, 199, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (426, 199, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (427, 200, 2, 0);
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (1, 1, 4, 1, '2024-01-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (2, 2, 7, 1, '2024-08-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (3, 2, 4, 2, '2024-08-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (4, 3, 10, 1, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (5, 3, 7, 2, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (6, 3, 4, 3, '2024-03-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (7, 4, 3, 1, '2024-10-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (8, 4, 10, 2, '2024-10-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (9, 4, 7, 3, '2024-10-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (10, 4, 4, 1, '2024-10-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (11, 6, 9, 1, '2024-12-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (12, 7, 2, 1, '2024-07-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (13, 7, 9, 2, '2024-07-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (14, 8, 5, 1, '2024-02-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (15, 8, 2, 2, '2024-02-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (16, 8, 9, 3, '2024-02-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (17, 9, 8, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (18, 9, 5, 2, '2024-09-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (19, 9, 2, 3, '2024-09-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (20, 9, 9, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (21, 11, 4, 1, '2024-11-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (22, 12, 7, 1, '2024-06-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (23, 12, 4, 2, '2024-06-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (24, 13, 10, 1, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (25, 13, 7, 2, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (26, 13, 4, 3, '2024-01-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (27, 14, 3, 1, '2024-08-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (28, 14, 10, 2, '2024-08-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (29, 14, 7, 3, '2024-08-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (30, 14, 4, 1, '2024-08-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (31, 16, 9, 1, '2024-10-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (32, 17, 2, 1, '2024-05-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (33, 17, 9, 2, '2024-05-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (34, 18, 5, 1, '2024-01-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (35, 18, 2, 2, '2024-01-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (36, 18, 9, 3, '2024-01-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (37, 19, 8, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (38, 19, 5, 2, '2024-08-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (39, 19, 2, 3, '2024-08-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (40, 19, 9, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (41, 21, 4, 1, '2024-10-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (42, 22, 7, 1, '2024-05-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (43, 22, 4, 2, '2024-05-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (44, 23, 10, 1, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (45, 23, 7, 2, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (46, 23, 4, 3, '2024-12-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (47, 24, 3, 1, '2024-07-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (48, 24, 10, 2, '2024-07-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (49, 24, 7, 3, '2024-07-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (50, 24, 4, 1, '2024-07-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (51, 26, 9, 1, '2024-09-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (52, 27, 2, 1, '2024-04-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (53, 27, 9, 2, '2024-04-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (54, 28, 5, 1, '2024-11-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (55, 28, 2, 2, '2024-11-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (56, 28, 9, 3, '2024-11-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (57, 29, 8, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (58, 29, 5, 2, '2024-06-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (59, 29, 2, 3, '2024-06-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (60, 29, 9, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (61, 31, 4, 1, '2024-08-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (62, 32, 7, 1, '2024-03-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (63, 32, 4, 2, '2024-03-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (64, 33, 10, 1, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (65, 33, 7, 2, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (66, 33, 4, 3, '2024-10-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (67, 34, 3, 1, '2024-05-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (68, 34, 10, 2, '2024-05-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (69, 34, 7, 3, '2024-05-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (70, 34, 4, 1, '2024-05-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (71, 36, 9, 1, '2024-08-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (72, 37, 2, 1, '2024-03-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (73, 37, 9, 2, '2024-03-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (74, 38, 5, 1, '2024-10-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (75, 38, 2, 2, '2024-10-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (76, 38, 9, 3, '2024-10-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (77, 39, 8, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (78, 39, 5, 2, '2024-05-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (79, 39, 2, 3, '2024-05-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (80, 39, 9, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (81, 41, 4, 1, '2024-07-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (82, 42, 7, 1, '2024-02-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (83, 42, 4, 2, '2024-02-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (84, 43, 10, 1, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (85, 43, 7, 2, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (86, 43, 4, 3, '2024-09-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (87, 44, 3, 1, '2024-04-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (88, 44, 10, 2, '2024-04-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (89, 44, 7, 3, '2024-04-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (90, 44, 4, 1, '2024-04-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (91, 46, 9, 1, '2024-06-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (92, 47, 2, 1, '2024-01-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (93, 47, 9, 2, '2024-01-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (94, 48, 5, 1, '2024-08-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (95, 48, 2, 2, '2024-08-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (96, 48, 9, 3, '2024-08-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (97, 49, 8, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (98, 49, 5, 2, '2024-03-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (99, 49, 2, 3, '2024-03-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (100, 49, 9, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (101, 51, 4, 1, '2024-06-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (102, 52, 7, 1, '2024-01-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (103, 52, 4, 2, '2024-01-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (104, 53, 10, 1, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (105, 53, 7, 2, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (106, 53, 4, 3, '2024-08-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (107, 54, 3, 1, '2024-03-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (108, 54, 10, 2, '2024-03-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (109, 54, 7, 3, '2024-03-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (110, 54, 4, 1, '2024-03-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (111, 56, 9, 1, '2024-05-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (112, 57, 2, 1, '2024-12-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (113, 57, 9, 2, '2024-12-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (114, 58, 5, 1, '2024-07-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (115, 58, 2, 2, '2024-07-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (116, 58, 9, 3, '2024-07-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (117, 59, 8, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (118, 59, 5, 2, '2024-02-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (119, 59, 2, 3, '2024-02-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (120, 59, 9, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (121, 61, 4, 1, '2025-04-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (122, 62, 7, 1, '2025-11-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (123, 62, 4, 2, '2025-11-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (124, 63, 10, 1, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (125, 63, 7, 2, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (126, 63, 4, 3, '2025-06-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (127, 64, 3, 1, '2025-01-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (128, 64, 10, 2, '2025-01-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (129, 64, 7, 3, '2025-01-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (130, 64, 4, 1, '2025-01-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (131, 66, 9, 1, '2025-03-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (132, 67, 2, 1, '2025-10-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (133, 67, 9, 2, '2025-10-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (134, 68, 5, 1, '2025-06-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (135, 68, 2, 2, '2025-06-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (136, 68, 9, 3, '2025-06-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (137, 69, 8, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (138, 69, 5, 2, '2025-01-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (139, 69, 2, 3, '2025-01-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (140, 69, 9, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (141, 71, 4, 1, '2025-03-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (142, 72, 7, 1, '2025-10-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (143, 72, 4, 2, '2025-10-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (144, 73, 10, 1, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (145, 73, 7, 2, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (146, 73, 4, 3, '2025-05-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (147, 74, 3, 1, '2025-12-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (148, 74, 10, 2, '2025-12-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (149, 74, 7, 3, '2025-12-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (150, 74, 4, 1, '2025-12-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (151, 76, 9, 1, '2025-02-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (152, 77, 2, 1, '2025-09-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (153, 77, 9, 2, '2025-09-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (154, 78, 5, 1, '2025-04-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (155, 78, 2, 2, '2025-04-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (156, 78, 9, 3, '2025-04-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (157, 79, 8, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (158, 79, 5, 2, '2025-11-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (159, 79, 2, 3, '2025-11-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (160, 79, 9, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (161, 81, 4, 1, '2025-01-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (162, 82, 7, 1, '2025-08-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (163, 82, 4, 2, '2025-08-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (164, 83, 10, 1, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (165, 83, 7, 2, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (166, 83, 4, 3, '2025-03-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (167, 84, 3, 1, '2025-10-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (168, 84, 10, 2, '2025-10-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (169, 84, 7, 3, '2025-10-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (170, 84, 4, 1, '2025-10-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (171, 86, 9, 1, '2025-01-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (172, 87, 2, 1, '2025-08-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (173, 87, 9, 2, '2025-08-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (174, 88, 5, 1, '2025-03-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (175, 88, 2, 2, '2025-03-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (176, 88, 9, 3, '2025-03-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (177, 89, 8, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (178, 89, 5, 2, '2025-10-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (179, 89, 2, 3, '2025-10-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (180, 89, 9, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (181, 91, 4, 1, '2025-12-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (182, 92, 7, 1, '2025-07-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (183, 92, 4, 2, '2025-07-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (184, 93, 10, 1, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (185, 93, 7, 2, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (186, 93, 4, 3, '2025-02-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (187, 94, 3, 1, '2025-09-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (188, 94, 10, 2, '2025-09-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (189, 94, 7, 3, '2025-09-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (190, 94, 4, 1, '2025-09-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (191, 96, 9, 1, '2025-11-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (192, 97, 2, 1, '2025-06-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (193, 97, 9, 2, '2025-06-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (194, 98, 5, 1, '2025-01-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (195, 98, 2, 2, '2025-01-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (196, 98, 9, 3, '2025-01-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (197, 99, 8, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (198, 99, 5, 2, '2025-08-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (199, 99, 2, 3, '2025-08-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (200, 99, 9, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));`,
    questions: [
      {
        id: 1,
        title: "Question 1: Library Management Database (Chen ERD)",
        description: "Create all tables for Library Management ERD: Members (memberID PK, firstName, lastName), MemberPhone (memberID FK, phone, PK (memberID, phone)), Librarian (librarianID PK, name), Books (bookCode PK, author, title), Loans (memberID FK, librarianID FK, bookCode FK, borrowDate, returnDate).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Members (\n    memberID INT PRIMARY KEY,\n    firstName NVARCHAR(50),\n    lastName NVARCHAR(50)\n);",
        solutionSQL: `CREATE TABLE Members (\n    memberID INT PRIMARY KEY,\n    firstName NVARCHAR(50),\n    lastName NVARCHAR(50)\n);\n\nCREATE TABLE MemberPhone (\n    memberID INT,\n    phone NVARCHAR(20),\n    PRIMARY KEY (memberID, phone),\n    FOREIGN KEY (memberID) REFERENCES Members(memberID)\n);\n\nCREATE TABLE Librarian (\n    librarianID INT PRIMARY KEY,\n    name NVARCHAR(100)\n);\n\nCREATE TABLE Books (\n    bookCode NVARCHAR(20) PRIMARY KEY,\n    author NVARCHAR(60),\n    title NVARCHAR(100)\n);\n\nCREATE TABLE Loans (\n    memberID INT,\n    librarianID INT,\n    bookCode NVARCHAR(20),\n    borrowDate DATE,\n    returnDate DATE,\n    PRIMARY KEY (memberID, bookCode, borrowDate),\n    FOREIGN KEY (memberID) REFERENCES Members(memberID),\n    FOREIGN KEY (librarianID) REFERENCES Librarian(librarianID),\n    FOREIGN KEY (bookCode) REFERENCES Books(bookCode)\n);`
      },
      {
        id: 2,
        title: "Question 2: Select Guests from USA, UK or Germany",
        description: "Write an SQL query to display GuestID, FirstName, LastName, Email, Nationality for guests whose Nationality is American, British, or German.",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT GuestID, FirstName, LastName, Email, Nationality FROM Guest WHERE Nationality IN ('American', 'British', 'German') ORDER BY LastName ASC;"
      },
      {
        id: 3,
        title: "Question 3: Bookings with Deluxe or Suite Room Types",
        description: "Display BookingID, GuestName, RoomNumber, TypeName, PricePerNight for all bookings that include Deluxe or Suite rooms.",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT b.BookingID, g.FirstName || ' ' || g.LastName AS GuestName, r.RoomNumber, rt.TypeName, bd.PricePerNight FROM Booking b JOIN Guest g ON b.GuestID = g.GuestID JOIN BookingDetail bd ON b.BookingID = bd.BookingID JOIN Room r ON bd.RoomID = r.RoomID JOIN RoomType rt ON r.RoomTypeID = rt.RoomTypeID WHERE rt.TypeName IN ('Deluxe', 'Suite') ORDER BY b.BookingID;"
      },
      {
        id: 4,
        title: "Question 4: Services Never Ordered by Any Guest",
        description: "Find all services that have never been ordered in any booking.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT s.ServiceID, s.ServiceName, s.Category, s.UnitPrice FROM Service s LEFT JOIN BookingService bs ON s.ServiceID = bs.ServiceID WHERE bs.BookingServiceID IS NULL;"
      },
      {
        id: 5,
        title: "Question 5: Monthly Booking Statistics in 2024",
        description: "Display Month (1 to 12), NumberOfBookings, and TotalAmount collected for each month in 2024.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT strftime('%m', BookingDate) AS Month, COUNT(BookingID) AS NumberOfBookings, SUM(TotalAmount) AS TotalRevenue FROM Booking WHERE strftime('%Y', BookingDate) = '2024' GROUP BY Month ORDER BY Month ASC;"
      },
      {
        id: 6,
        title: "Question 6: Average Length of Stay per Room Type",
        description: "Calculate the average NumNights booked for each RoomType.",
        initialCode: "-- Question 6: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT rt.TypeName, ROUND(AVG(bd.NumNights), 2) AS AvgNights FROM RoomType rt JOIN Room r ON rt.RoomTypeID = r.RoomTypeID JOIN BookingDetail bd ON r.RoomID = bd.RoomID GROUP BY rt.TypeName ORDER BY AvgNights DESC;"
      },
      {
        id: 7,
        title: "Question 7: Guest with Most Diverse Services Used",
        description: "Find the guest who used the highest number of distinct services.",
        initialCode: "-- Question 7: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT g.GuestID, g.FirstName || ' ' || g.LastName AS GuestName, COUNT(DISTINCT bs.ServiceID) AS DistinctServices FROM Guest g JOIN Booking b ON g.GuestID = b.GuestID JOIN BookingService bs ON b.BookingID = bs.BookingID GROUP BY g.GuestID, GuestName ORDER BY DistinctServices DESC LIMIT 1;"
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure cancelBooking (T-SQL Reference)",
        description: "Write stored procedure cancelBooking(@bookingID INT) to set status to 'Cancelled' and return 0.",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE cancelBooking\n    @bookingID INT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE cancelBooking\n    @bookingID INT\nAS\nBEGIN\n    IF NOT EXISTS (SELECT 1 FROM Booking WHERE BookingID = @bookingID)\n        RETURN 1\n    UPDATE Booking SET Status = 'Cancelled' WHERE BookingID = @bookingID\n    RETURN 0\nEND`
      },
      {
        id: 9,
        title: "Question 9: Trigger trg_UpdateTotalAmountOnService (T-SQL Reference)",
        description: "Trigger on BookingService to update Booking.TotalAmount after inserting a new service.",
        initialCode: "-- Question 9: Trigger (T-SQL Reference)\nCREATE TRIGGER trg_UpdateTotalAmountOnService\nON BookingService\nAFTER INSERT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE TRIGGER trg_UpdateTotalAmountOnService\nON BookingService\nAFTER INSERT\nAS\nBEGIN\n    UPDATE Booking\n    SET TotalAmount = TotalAmount + (SELECT SUM(TotalCost) FROM inserted WHERE inserted.BookingID = Booking.BookingID)\n    WHERE BookingID IN (SELECT DISTINCT BookingID FROM inserted);\nEND`
      },
      {
        id: 10,
        title: "Question 10: Apply 10% Discount to Long Stay Bookings",
        description: "Update TotalAmount with 10% discount for bookings where total NumNights >= 5 in BookingDetail.",
        initialCode: "-- Question 10: Write your UPDATE SQL here\nUPDATE Booking\nSET TotalAmount = ",
        solutionSQL: "UPDATE Booking SET TotalAmount = TotalAmount * 0.9 WHERE BookingID IN (SELECT BookingID FROM BookingDetail GROUP BY BookingID HAVING SUM(NumNights) >= 5);"
      }
    ]
  },

  // ==================== EXAM 4 ====================
  {
    id: 'pe_exam4',
    code: 'DBI202_PE_SU2026_HOTEL_4',
    title: 'PE DBI202 - Đề 4 (Summer 2026)',
    subtitle: 'Hotel Booking System • Mã Đề 4',
    description: 'Đề thi thực hành PE SQL Summer 2026 (Bộ đề 4): Quản lý phòng & thanh toán, các phương thức thanh toán Online/Card, và báo cáo doanh thu.',
    icon: '🏨',
    badgeClass: 'badge-db',
    themeColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #c084fc 100%)',
    erdDiagramHtml: hotelBookingERDSvg,
    schemaDetails: hotelSchemaDetails,
    dbScript: `-- ============================================================
-- 1. RoomType
-- ============================================================
CREATE TABLE RoomType (
    RoomTypeID   INT            PRIMARY KEY,
    TypeName     VARCHAR(50)   NOT NULL UNIQUE,
    Description  VARCHAR(255)  NULL,
    BasePrice    DECIMAL(10,2) NOT NULL CHECK (BasePrice > 0),
    MaxOccupancy INTEGER       NOT NULL CHECK (MaxOccupancy BETWEEN 1 AND 10)
);
-- ============================================================
-- 2. Room
-- ============================================================
CREATE TABLE Room (
    RoomID     INT          PRIMARY KEY,
    RoomNumber VARCHAR(10) NOT NULL UNIQUE,
    RoomTypeID INT         NOT NULL,
    Floor      INTEGER     NOT NULL CHECK (Floor >= 1),
    Status     VARCHAR(20) NOT NULL DEFAULT 'Available'
                           CHECK (Status IN ('Available','Occupied','Maintenance','Reserved')),
    FOREIGN KEY (RoomTypeID) REFERENCES RoomType(RoomTypeID)
);
-- ============================================================
-- 3. Guest
-- ============================================================
CREATE TABLE Guest (
    GuestID     INT            PRIMARY KEY,
    FirstName   VARCHAR(50)   NOT NULL,
    LastName    VARCHAR(50)   NOT NULL,
    Email       VARCHAR(100)  NOT NULL UNIQUE,
    Phone       VARCHAR(20)   NULL,
    NationalID  VARCHAR(30)   NULL UNIQUE,
    Nationality VARCHAR(50)   NULL,
    DateOfBirth DATE          NULL,
    CreatedAt   TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- ============================================================
-- 4. Booking
-- ============================================================
CREATE TABLE Booking (
    BookingID    INT            PRIMARY KEY,
    GuestID      INT           NOT NULL,
    BookingDate  TEXT      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CheckInDate  DATE          NOT NULL,
    CheckOutDate DATE          NOT NULL,
    Status       VARCHAR(20)   NOT NULL DEFAULT 'Confirmed'
                               CHECK (Status IN ('Confirmed','Checked-In','Checked-Out','Cancelled','No-Show')),
    TotalAmount  DECIMAL(10,2) NOT NULL DEFAULT 0,
	PaymentDate datetime NULL DEFAULT CURRENT_TIMESTAMP,
	PaymentMethod varchar(30) NULL CHECK (PaymentMethod IN ('Cash','Credit Card','Debit Card','Bank Transfer','Online')),
	PaymentStatus varchar(20) NULL DEFAULT 'Completed'
                                CHECK (PaymentStatus IN ('Completed','Pending','Refunded','Failed')),
    Notes        VARCHAR(500)  NULL,
    FOREIGN KEY (GuestID) REFERENCES Guest(GuestID),
    CHECK (CheckOutDate > CheckInDate)
);
-- ============================================================
-- 5. BookingDetail  (1-3 rooms per booking)
-- ============================================================
CREATE TABLE BookingDetail (
    DetailID      INT            PRIMARY KEY,
    BookingID     INT           NOT NULL,
    RoomID        INT           NOT NULL,
    PricePerNight DECIMAL(10,2) NOT NULL CHECK (PricePerNight > 0),
    NumNights     INTEGER      NOT NULL CHECK (NumNights > 0),
    SubTotal DECIMAL(10,2) GENERATED ALWAYS AS (PricePerNight * NumNights) STORED,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (RoomID)    REFERENCES Room(RoomID),
    UNIQUE (BookingID, RoomID)
);
-- ============================================================
-- 6. BookingGuest  (1-4 occupants per BookingDetail)
-- ============================================================
CREATE TABLE BookingGuest (
    BookingGuestID  INT           PRIMARY KEY,
    DetailID        INT          NOT NULL,
    GuestID         INT          NOT NULL,
    IsPrimaryGuest  INTEGER          NOT NULL DEFAULT 0,
    FOREIGN KEY (DetailID) REFERENCES BookingDetail(DetailID),
    FOREIGN KEY (GuestID)  REFERENCES Guest(GuestID),
    UNIQUE (DetailID, GuestID)
);
-- ============================================================
-- 7. Service
-- ============================================================
CREATE TABLE Service (
    ServiceID   INT            PRIMARY KEY,
    ServiceName VARCHAR(100)  NOT NULL UNIQUE,
    Category    VARCHAR(50)   NOT NULL,
    UnitPrice   DECIMAL(10,2) NOT NULL CHECK (UnitPrice >= 0),
    Unit        VARCHAR(30)   NOT NULL DEFAULT 'per use'
);
-- ============================================================
-- 8. BookingService  (0-4 services per booking)
-- ============================================================
CREATE TABLE BookingService (
    BookingServiceID INT       PRIMARY KEY,
    BookingID        INT      NOT NULL,
    ServiceID        INT      NOT NULL,
    Quantity         INTEGER NOT NULL DEFAULT 1 CHECK (Quantity > 0),
    ServiceDate      DATE     NOT NULL DEFAULT CURRENT_DATE,
    TotalCost        DECIMAL(10,2) NULL,
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
);
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (1, 'Alice', 'Nguyen', 'alice.nguyen1@email.com', '0900000001', 'NID0001', 'Vietnamese', '1970-01-01', '2023-12-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (2, 'Bob', 'Smith', 'bob.smith2@email.com', '0900000002', 'NID0002', 'American', '1981-08-14', '2023-12-25 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (3, 'Chen', 'Wei', 'chen.wei3@email.com', '0900000003', 'NID0003', 'Chinese', '1992-03-27', '2024-03-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (4, 'Maria', 'Garcia', 'maria.garcia4@email.com', '0900000004', 'NID0004', 'Spanish', '2003-10-12', '2024-02-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (5, 'Hiroshi', 'Tanaka', 'hiroshi.tanaka5@email.com', '0900000005', 'NID0005', 'Japanese', '1979-05-25', '2024-05-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (6, 'Linh', 'Tran', 'linh.tran6@email.com', '0900000006', 'NID0006', 'Vietnamese', '1990-12-10', '2024-05-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (7, 'James', 'Wilson', 'james.wilson7@email.com', '0900000007', 'NID0007', 'British', '2001-07-23', '2024-07-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (8, 'Sophie', 'Pham', 'sophie.pham8@email.com', '0900000008', 'NID0008', 'Vietnamese', '1977-02-08', '2024-02-14 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (9, 'Linda', 'Le', 'linda.le9@email.com', '0900000009', 'NID0009', 'Chinese', '1988-09-21', '2024-02-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (10, 'Carlos', 'Rodriguez', 'carlos.rodriguez10@email.com', '0900000010', 'NID0010', 'Spanish', '1999-04-06', '2024-03-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (11, 'Yuki', 'Suzuki', 'yuki.suzuki11@email.com', '0900000011', 'NID0011', 'Japanese', '1975-11-19', '2024-10-26 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (12, 'Emily', 'Johnson', 'emily.johnson12@email.com', '0900000012', 'NID0012', 'American', '1986-06-04', '2024-05-28 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (13, 'David', 'Brown', 'david.brown13@email.com', '0900000013', 'NID0013', 'British', '1997-01-17', '2023-12-30 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (14, 'Sarah', 'Martinez', 'sarah.martinez14@email.com', '0900000014', 'NID0014', 'Spanish', '1973-08-02', '2024-08-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (15, 'Ahmed', 'Ali', 'ahmed.ali15@email.com', '0900000015', 'NID0015', 'Egyptian', '1984-03-15', '2024-03-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (16, 'Fatima', 'Hassan', 'fatima.hassan16@email.com', '0900000016', 'NID0016', 'Egyptian', '1995-10-28', '2024-10-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (17, 'Pierre', 'Dupont', 'pierre.dupont17@email.com', '0900000017', 'NID0017', 'French', '1971-05-13', '2024-05-21 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (18, 'Isabelle', 'Laurent', 'isabelle.laurent18@email.com', '0900000018', 'NID0018', 'French', '1982-12-26', '2023-12-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (19, 'Nguyen', 'Hoang', 'nguyen.hoang19@email.com', '0900000019', 'NID0019', 'Vietnamese', '1993-07-11', '2024-07-31 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (20, 'Tran', 'Dao', 'tran.dao20@email.com', '0900000020', 'NID0020', 'Vietnamese', '2004-02-24', '2024-03-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (21, 'Michael', 'Johnson', 'michael.johnson21@email.com', '0900000021', 'NID0021', 'American', '1980-09-09', '2024-10-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (22, 'Anna', 'Kovacs', 'anna.kovacs22@email.com', '0900000022', 'NID0022', 'Hungarian', '1991-04-22', '2024-05-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (23, 'Ravi', 'Sharma', 'ravi.sharma23@email.com', '0900000023', 'NID0023', 'Indian', '2002-11-07', '2024-12-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (24, 'Priya', 'Patel', 'priya.patel24@email.com', '0900000024', 'NID0024', 'Indian', '1978-06-20', '2024-07-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (25, 'Lars', 'Eriksson', 'lars.eriksson25@email.com', '0900000025', 'NID0025', 'Swedish', '1989-01-05', '2024-02-12 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (26, 'Astrid', 'Hansen', 'astrid.hansen26@email.com', '0900000026', 'NID0026', 'Norwegian', '2000-08-18', '2024-08-20 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (27, 'Omar', 'Ibrahim', 'omar.ibrahim27@email.com', '0900000027', 'NID0027', 'Jordanian', '1976-03-03', '2024-03-22 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (28, 'Layla', 'Mansour', 'layla.mansour28@email.com', '0900000028', 'NID0028', 'Lebanese', '1987-10-16', '2024-10-24 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (29, 'Marco', 'Rossi', 'marco.rossi29@email.com', '0900000029', 'NID0029', 'Italian', '1998-05-01', '2024-06-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (30, 'Giulia', 'Ferrari', 'giulia.ferrari30@email.com', '0900000030', 'NID0030', 'Italian', '1974-12-14', '2024-01-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (31, 'Kenji', 'Yamamoto', 'kenji.yamamoto31@email.com', '0900000031', 'NID0031', 'Japanese', '1985-07-27', '2024-08-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (32, 'Sakura', 'Nakamura', 'sakura.nakamura32@email.com', '0900000032', 'NID0032', 'Japanese', '1996-02-12', '2024-03-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (33, 'Hassan', 'Al-Farsi', 'hassan.al-farsi33@email.com', '0900000033', 'NID0033', 'Omani', '1972-09-25', '2024-10-17 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (34, 'Amira', 'Khalil', 'amira.khalil34@email.com', '0900000034', 'NID0034', 'Jordanian', '1983-04-10', '2024-05-19 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (35, 'Luke', 'Anderson', 'luke.anderson35@email.com', '0900000035', 'NID0035', 'Australian', '1994-11-23', '2023-12-27 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (36, 'Emma', 'Thomas', 'emma.thomas36@email.com', '0900000036', 'NID0036', 'British', '1970-06-08', '2024-07-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (37, 'Ivan', 'Petrov', 'ivan.petrov37@email.com', '0900000037', 'NID0037', 'Russian', '1981-01-21', '2024-02-29 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (38, 'Natasha', 'Ivanova', 'natasha.ivanova38@email.com', '0900000038', 'NID0038', 'Russian', '1992-08-06', '2024-10-02 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (39, 'Wei', 'Liu', 'wei.liu39@email.com', '0900000039', 'NID0039', 'Chinese', '2003-03-19', '2024-05-04 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (40, 'Mei', 'Zhang', 'mei.zhang40@email.com', '0900000040', 'NID0040', 'Chinese', '1979-10-04', '2024-12-06 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (41, 'Thomas', 'Mueller', 'thomas.mueller41@email.com', '0900000041', 'NID0041', 'German', '1990-05-17', '2024-07-08 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (42, 'Claire', 'Wagner', 'claire.wagner42@email.com', '0900000042', 'NID0042', 'German', '2001-12-02', '2024-02-10 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (43, 'Alex', 'Taylor', 'alex.taylor43@email.com', '0900000043', 'NID0043', 'Australian', '1977-07-15', '2024-09-01 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (44, 'Jordan', 'Morgan', 'jordan.morgan44@email.com', '0900000044', 'NID0044', 'British', '1988-02-28', '2024-04-03 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (45, 'Sam', 'Davis', 'sam.davis45@email.com', '0900000045', 'NID0045', 'American', '1999-09-13', '2024-11-05 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (46, 'Taylor', 'Robinson', 'taylor.robinson46@email.com', '0900000046', 'NID0046', 'British', '1975-04-26', '2024-06-07 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (47, 'Lee', 'Park', 'lee.park47@email.com', '0900000047', 'NID0047', 'Korean', '1986-11-11', '2024-01-09 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (48, 'Kim', 'Choi', 'kim.choi48@email.com', '0900000048', 'NID0048', 'Korean', '1997-06-24', '2024-08-11 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (49, 'Raj', 'Singh', 'raj.singh49@email.com', '0900000049', 'NID0049', 'Indian', '1973-01-09', '2024-03-13 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (50, 'Aisha', 'Osei', 'aisha.osei50@email.com', '0900000050', 'NID0050', 'Ghanaian', '1984-08-22', '2024-10-15 00:00:00');
INSERT INTO Guest (GuestID, FirstName, LastName, Email, Phone, NationalID, Nationality, DateOfBirth, CreatedAt) VALUES (51, 'Aisha', 'Osaki', 'aisha.osaki51@email.com', '0978900050', 'NID0051', 'Japanese', '1990-08-22', '2024-11-15 00:00:00');
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (1, 'Standard', 'Cozy room with basic amenities', CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (2, 'Deluxe', 'Spacious room with city or garden view', CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (3, 'Suite', 'Luxury suite with living area and minibar', CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (4, 'Family', 'Large room with two queen beds', CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO RoomType (RoomTypeID, TypeName, Description, BasePrice, MaxOccupancy) VALUES (5, 'Penthouse', 'Top-floor suite with panoramic view and pool', CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (1, 'Breakfast Buffet', 'Food & Beverage', CAST(15.00 AS Decimal(10, 2)), 'per person per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (2, 'Breakfast Room Service', 'Food & Beverage', CAST(10.00 AS Decimal(10, 2)), 'per order');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (3, 'Airport Transfer', 'Transport', CAST(25.00 AS Decimal(10, 2)), 'per trip');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (4, 'Laundry Service', 'Housekeeping', CAST(8.00 AS Decimal(10, 2)), 'per bag');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (5, 'Spa & Massage', 'Wellness', CAST(50.00 AS Decimal(10, 2)), 'per session');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (6, 'Mini Bar Refill', 'Food & Beverage', CAST(20.00 AS Decimal(10, 2)), 'per refill');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (7, 'Parking', 'Transport', CAST(5.00 AS Decimal(10, 2)), 'per day');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (8, 'Swimming Pool', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (9, 'Gym Access', 'Recreation', CAST(0.00 AS Decimal(10, 2)), 'complimentary');
INSERT INTO Service (ServiceID, ServiceName, Category, UnitPrice, Unit) VALUES (10, 'Business Center', 'Business', CAST(10.00 AS Decimal(10, 2)), 'per hour');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (1, '101', 1, 1, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (2, '102', 1, 1, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (3, '201', 1, 2, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (4, '202', 1, 2, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (5, '301', 1, 3, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (6, '302', 1, 3, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (7, '401', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (8, '402', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (9, '403', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (10, '404', 2, 4, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (11, '501', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (12, '502', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (13, '503', 2, 5, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (14, '504', 2, 5, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (15, '601', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (16, '602', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (17, '603', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (18, '604', 3, 6, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (19, '605', 3, 6, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (20, '606', 3, 6, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (21, '701', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (22, '702', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (23, '703', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (24, '704', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (25, '705', 4, 7, 'Reserved');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (26, '706', 4, 7, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (27, '801', 5, 8, 'Available');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (28, '802', 5, 8, 'Maintenance');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (29, '803', 5, 8, 'Occupied');
INSERT INTO Room (RoomID, RoomNumber, RoomTypeID, Floor, Status) VALUES (30, '804', 5, 8, 'Available');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (1, 1, '2023-12-31 00:00:00', '2024-01-01', '2024-01-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-01-02 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (2, 1, '2024-08-02 00:00:00', '2024-08-04', '2024-08-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-08-06 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (3, 1, '2024-03-04 00:00:00', '2024-03-07', '2024-03-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-03-10 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (4, 1, '2024-10-06 00:00:00', '2024-10-10', '2024-10-14', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-10-14 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (5, 2, '2024-05-08 00:00:00', '2024-05-13', '2024-05-18', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-05-18 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (6, 2, '2024-12-10 00:00:00', '2024-12-16', '2024-12-22', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-12-22 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (7, 2, '2024-07-12 00:00:00', '2024-07-19', '2024-07-26', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-07-26 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (8, 2, '2024-02-14 00:00:00', '2024-02-22', '2024-02-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-02-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (9, 3, '2024-09-16 00:00:00', '2024-09-25', '2024-09-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-09-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (10, 3, '2024-03-24 00:00:00', '2024-04-03', '2024-04-06', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-04-06 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (11, 3, '2024-10-26 00:00:00', '2024-11-06', '2024-11-10', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-10 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (12, 3, '2024-05-28 00:00:00', '2024-06-09', '2024-06-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-14 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (13, 4, '2023-12-30 00:00:00', '2024-01-12', '2024-01-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-18 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (14, 4, '2024-08-01 00:00:00', '2024-08-15', '2024-08-22', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-08-22 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (15, 4, '2024-03-17 00:00:00', '2024-03-18', '2024-03-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (16, 4, '2024-10-19 00:00:00', '2024-10-21', '2024-10-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-10-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (17, 5, '2024-05-21 00:00:00', '2024-05-24', '2024-05-27', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-05-27 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (18, 5, '2023-12-29 00:00:00', '2024-01-02', '2024-01-06', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-01-06 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (19, 5, '2024-07-31 00:00:00', '2024-08-05', '2024-08-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-08-10 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (20, 5, '2024-03-02 00:00:00', '2024-03-08', '2024-03-14', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-03-14 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (21, 6, '2024-10-04 00:00:00', '2024-10-11', '2024-10-18', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-10-18 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (22, 6, '2024-05-06 00:00:00', '2024-05-14', '2024-05-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-05-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (23, 6, '2024-12-08 00:00:00', '2024-12-17', '2024-12-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-12-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (24, 6, '2024-07-10 00:00:00', '2024-07-20', '2024-07-23', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-07-23 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (25, 7, '2024-02-12 00:00:00', '2024-02-23', '2024-02-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-02-27 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (26, 7, '2024-08-20 00:00:00', '2024-09-01', '2024-09-06', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-06 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (27, 7, '2024-03-22 00:00:00', '2024-04-04', '2024-04-10', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-10 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (28, 7, '2024-10-24 00:00:00', '2024-11-07', '2024-11-14', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-14 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (29, 8, '2024-06-09 00:00:00', '2024-06-10', '2024-06-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-06-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (30, 8, '2024-01-11 00:00:00', '2024-01-13', '2024-01-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-01-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (31, 8, '2024-08-13 00:00:00', '2024-08-16', '2024-08-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-08-19 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (32, 8, '2024-03-15 00:00:00', '2024-03-19', '2024-03-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-03-23 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (33, 9, '2024-10-17 00:00:00', '2024-10-22', '2024-10-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-10-27 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (34, 9, '2024-05-19 00:00:00', '2024-05-25', '2024-05-31', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-05-31 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (35, 9, '2023-12-27 00:00:00', '2024-01-03', '2024-01-10', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-01-10 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (36, 10, '2024-07-29 00:00:00', '2024-08-06', '2024-08-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-08-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (37, 10, '2024-02-29 00:00:00', '2024-03-09', '2024-03-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-03-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (38, 10, '2024-10-02 00:00:00', '2024-10-12', '2024-10-15', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-10-15 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (39, 11, '2024-05-04 00:00:00', '2024-05-15', '2024-05-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-05-19 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (40, 11, '2024-12-06 00:00:00', '2024-12-18', '2024-12-23', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-12-23 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (41, 11, '2024-07-08 00:00:00', '2024-07-21', '2024-07-27', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-27 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (42, 12, '2024-02-10 00:00:00', '2024-02-24', '2024-03-02', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-03-02 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (43, 12, '2024-09-01 00:00:00', '2024-09-02', '2024-09-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-03 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (44, 12, '2024-04-03 00:00:00', '2024-04-05', '2024-04-07', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-04-07 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (45, 13, '2024-11-05 00:00:00', '2024-11-08', '2024-11-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-11-11 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (46, 13, '2024-06-07 00:00:00', '2024-06-11', '2024-06-15', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2024-06-15 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (47, 13, '2024-01-09 00:00:00', '2024-01-14', '2024-01-19', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2024-01-19 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (48, 14, '2024-08-11 00:00:00', '2024-08-17', '2024-08-23', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2024-08-23 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (49, 14, '2024-03-13 00:00:00', '2024-03-20', '2024-03-27', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2024-03-27 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (50, 14, '2024-10-15 00:00:00', '2024-10-23', '2024-10-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2024-10-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (51, 15, '2024-05-23 00:00:00', '2024-06-01', '2024-06-03', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2024-06-03 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (52, 15, '2023-12-25 00:00:00', '2024-01-04', '2024-01-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2024-01-07 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (53, 15, '2024-07-27 00:00:00', '2024-08-07', '2024-08-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2024-08-11 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (54, 16, '2024-02-27 00:00:00', '2024-03-10', '2024-03-15', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2024-03-15 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (55, 16, '2024-09-30 00:00:00', '2024-10-13', '2024-10-19', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2024-10-19 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (56, 16, '2024-05-02 00:00:00', '2024-05-16', '2024-05-23', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-05-23 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (57, 17, '2024-12-18 00:00:00', '2024-12-19', '2024-12-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-12-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (58, 17, '2024-07-20 00:00:00', '2024-07-22', '2024-07-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-07-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (59, 17, '2024-02-22 00:00:00', '2024-02-25', '2024-02-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-02-28 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (60, 18, '2024-08-30 00:00:00', '2024-09-03', '2024-09-07', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2024-09-07 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (61, 18, '2025-04-01 00:00:00', '2025-04-06', '2025-04-11', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-04-11 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (62, 18, '2025-11-03 00:00:00', '2025-11-09', '2025-11-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-11-15 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (63, 19, '2025-06-05 00:00:00', '2025-06-12', '2025-06-19', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-06-19 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (64, 19, '2025-01-07 00:00:00', '2025-01-15', '2025-01-16', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-01-16 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (65, 20, '2025-08-09 00:00:00', '2025-08-18', '2025-08-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-08-20 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (66, 20, '2025-03-11 00:00:00', '2025-03-21', '2025-03-24', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-03-24 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (67, 21, '2025-10-13 00:00:00', '2025-10-24', '2025-10-28', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-10-28 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (68, 21, '2025-05-21 00:00:00', '2025-06-02', '2025-06-07', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-06-07 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (69, 22, '2024-12-23 00:00:00', '2025-01-05', '2025-01-11', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-01-11 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (70, 22, '2025-07-25 00:00:00', '2025-08-08', '2025-08-15', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-08-15 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (71, 23, '2025-03-10 00:00:00', '2025-03-11', '2025-03-12', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-12 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (72, 23, '2025-10-12 00:00:00', '2025-10-14', '2025-10-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-16 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (73, 24, '2025-05-14 00:00:00', '2025-05-17', '2025-05-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-20 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (74, 24, '2025-12-16 00:00:00', '2025-12-20', '2025-12-24', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-12-24 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (75, 25, '2025-07-18 00:00:00', '2025-07-23', '2025-07-28', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-07-28 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (76, 25, '2025-01-26 00:00:00', '2025-02-01', '2025-02-07', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-02-07 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (77, 26, '2025-08-28 00:00:00', '2025-09-04', '2025-09-11', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-09-11 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (78, 26, '2025-03-30 00:00:00', '2025-04-07', '2025-04-08', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-04-08 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (79, 27, '2025-11-01 00:00:00', '2025-11-10', '2025-11-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-11-12 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (80, 27, '2025-06-03 00:00:00', '2025-06-13', '2025-06-16', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-06-16 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (81, 28, '2025-01-05 00:00:00', '2025-01-16', '2025-01-20', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-01-20 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (82, 28, '2025-08-07 00:00:00', '2025-08-19', '2025-08-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-08-24 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (83, 29, '2025-03-09 00:00:00', '2025-03-22', '2025-03-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-03-28 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (84, 30, '2025-10-11 00:00:00', '2025-10-25', '2025-11-01', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-11-01 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (85, 31, '2025-06-02 00:00:00', '2025-06-03', '2025-06-04', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-06-04 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (86, 32, '2025-01-04 00:00:00', '2025-01-06', '2025-01-08', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-01-08 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (87, 33, '2025-08-06 00:00:00', '2025-08-09', '2025-08-12', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-08-12 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (88, 34, '2025-03-08 00:00:00', '2025-03-12', '2025-03-16', 'No-Show', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-03-16 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (89, 35, '2025-10-10 00:00:00', '2025-10-15', '2025-10-20', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-10-20 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (90, 36, '2025-05-12 00:00:00', '2025-05-18', '2025-05-24', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), NULL, '2025-05-24 00:00:00', 'Cash', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (91, 37, '2025-12-14 00:00:00', '2025-12-21', '2025-12-28', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Early check-in requested', '2025-12-28 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (92, 38, '2025-07-16 00:00:00', '2025-07-24', '2025-07-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Airport pickup needed', '2025-07-25 00:00:00', 'Debit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (93, 39, '2025-01-24 00:00:00', '2025-02-02', '2025-02-04', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Honeymoon decoration', '2025-02-04 00:00:00', 'Bank Transfer', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (94, 40, '2025-08-26 00:00:00', '2025-09-05', '2025-09-08', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'VIP guest', '2025-09-08 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (95, 41, '2025-03-28 00:00:00', '2025-04-08', '2025-04-12', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Birthday celebration', '2025-04-12 00:00:00', 'Cash', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (96, 42, '2025-10-30 00:00:00', '2025-11-11', '2025-11-16', 'Checked-In', CAST(0.00 AS Decimal(10, 2)), 'Anniversary stay', '2025-11-16 00:00:00', 'Credit Card', 'Completed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (97, 43, '2025-06-01 00:00:00', '2025-06-14', '2025-06-20', 'Cancelled', CAST(0.00 AS Decimal(10, 2)), 'Business trip', '2025-06-20 00:00:00', 'Debit Card', 'Refunded');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (98, 44, '2025-01-03 00:00:00', '2025-01-17', '2025-01-24', 'No-Show', CAST(0.00 AS Decimal(10, 2)), 'Group booking', '2025-01-24 00:00:00', 'Bank Transfer', 'Failed');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (99, 45, '2025-08-19 00:00:00', '2025-08-20', '2025-08-21', 'Confirmed', CAST(0.00 AS Decimal(10, 2)), 'Long-stay discount applied', '2025-08-21 00:00:00', 'Online', 'Pending');
INSERT INTO Booking (BookingID, GuestID, BookingDate, CheckInDate, CheckOutDate, Status, TotalAmount, Notes, PaymentDate, PaymentMethod, PaymentStatus) VALUES (100, 46, '2025-03-21 00:00:00', '2025-03-23', '2025-03-25', 'Checked-Out', CAST(0.00 AS Decimal(10, 2)), 'Complimentary upgrade', '2025-03-25 00:00:00', 'Cash', 'Completed');
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (1, 1, 1, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (2, 1, 2, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (3, 2, 3, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (4, 2, 4, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (5, 2, 5, CAST(96.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (6, 3, 6, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (7, 4, 7, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (8, 4, 8, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (9, 5, 9, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (10, 5, 10, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (11, 5, 11, CAST(180.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (12, 6, 12, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (13, 7, 13, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (14, 7, 14, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (15, 8, 15, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (16, 8, 16, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (17, 8, 17, CAST(360.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (18, 9, 18, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (19, 10, 19, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (20, 10, 20, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (21, 11, 21, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (22, 11, 22, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (23, 11, 23, CAST(240.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (24, 12, 24, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (25, 13, 25, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (26, 13, 26, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (27, 14, 27, CAST(600.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (28, 14, 28, CAST(660.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (29, 14, 29, CAST(720.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (30, 15, 30, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (31, 16, 1, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (32, 16, 2, CAST(88.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (33, 17, 3, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (34, 17, 4, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (35, 17, 5, CAST(96.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (36, 18, 6, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (37, 19, 7, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (38, 19, 8, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (39, 20, 9, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (40, 20, 10, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (41, 20, 11, CAST(180.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (42, 21, 12, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (43, 22, 13, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (44, 22, 14, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (45, 23, 15, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (46, 23, 16, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (47, 23, 17, CAST(360.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (48, 24, 18, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (49, 25, 19, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (50, 25, 20, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (51, 26, 21, CAST(200.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (52, 26, 22, CAST(220.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (53, 26, 23, CAST(240.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (54, 27, 24, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (55, 28, 25, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (56, 28, 26, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (57, 29, 27, CAST(600.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (58, 29, 28, CAST(660.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (59, 29, 29, CAST(720.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (60, 30, 30, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (61, 31, 1, CAST(80.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (62, 31, 2, CAST(88.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (63, 32, 3, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (64, 32, 4, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (65, 32, 5, CAST(96.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (66, 33, 6, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (67, 34, 7, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (68, 34, 8, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (69, 35, 9, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (70, 35, 10, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (71, 35, 11, CAST(180.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (72, 36, 12, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (73, 37, 13, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (74, 37, 14, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (75, 38, 15, CAST(300.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (76, 38, 16, CAST(330.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (77, 38, 17, CAST(360.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (78, 39, 18, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (79, 40, 19, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (80, 40, 20, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (81, 41, 21, CAST(200.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (82, 41, 22, CAST(220.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (83, 41, 23, CAST(240.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (84, 42, 24, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (85, 43, 25, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (86, 43, 26, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (87, 44, 27, CAST(600.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (88, 44, 28, CAST(660.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (89, 44, 29, CAST(720.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (90, 45, 30, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (91, 46, 1, CAST(80.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (92, 46, 2, CAST(88.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (93, 47, 3, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (94, 47, 4, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (95, 47, 5, CAST(96.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (96, 48, 6, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (97, 49, 7, CAST(150.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (98, 49, 8, CAST(165.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (99, 50, 9, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (100, 50, 10, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (101, 50, 11, CAST(180.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (102, 51, 12, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (103, 52, 13, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (104, 52, 14, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (105, 53, 15, CAST(300.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (106, 53, 16, CAST(330.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (107, 53, 17, CAST(360.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (108, 54, 18, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (109, 55, 19, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (110, 55, 20, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (111, 56, 21, CAST(200.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (112, 56, 22, CAST(220.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (113, 56, 23, CAST(240.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (114, 57, 24, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (115, 58, 25, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (116, 58, 26, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (117, 59, 27, CAST(600.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (118, 59, 28, CAST(660.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (119, 59, 29, CAST(720.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (120, 60, 30, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (121, 61, 1, CAST(80.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (122, 61, 2, CAST(88.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (123, 62, 3, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (124, 62, 4, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (125, 62, 5, CAST(96.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (126, 63, 6, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (127, 64, 7, CAST(150.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (128, 64, 8, CAST(165.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (129, 65, 9, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (130, 65, 10, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (131, 65, 11, CAST(180.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (132, 66, 12, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (133, 67, 13, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (134, 67, 14, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (135, 68, 15, CAST(300.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (136, 68, 16, CAST(330.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (137, 68, 17, CAST(360.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (138, 69, 18, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (139, 70, 19, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (140, 70, 20, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (141, 71, 21, CAST(200.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (142, 71, 22, CAST(220.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (143, 71, 23, CAST(240.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (144, 72, 24, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (145, 73, 25, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (146, 73, 26, CAST(220.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (147, 74, 27, CAST(600.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (148, 74, 28, CAST(660.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (149, 74, 29, CAST(720.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (150, 75, 30, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (151, 76, 1, CAST(80.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (152, 76, 2, CAST(88.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (153, 77, 3, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (154, 77, 4, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (155, 77, 5, CAST(96.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (156, 78, 6, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (157, 79, 7, CAST(150.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (158, 79, 8, CAST(165.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (159, 80, 9, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (160, 80, 10, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (161, 80, 11, CAST(180.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (162, 81, 12, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (163, 82, 13, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (164, 82, 14, CAST(165.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (165, 83, 15, CAST(300.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (166, 83, 16, CAST(330.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (167, 83, 17, CAST(360.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (168, 84, 18, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (169, 85, 19, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (170, 85, 20, CAST(330.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (171, 86, 21, CAST(200.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (172, 86, 22, CAST(220.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (173, 86, 23, CAST(240.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (174, 87, 24, CAST(200.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (175, 88, 25, CAST(200.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (176, 88, 26, CAST(220.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (177, 89, 27, CAST(600.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (178, 89, 28, CAST(660.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (179, 89, 29, CAST(720.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (180, 90, 30, CAST(600.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (181, 91, 1, CAST(80.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (182, 91, 2, CAST(88.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (183, 92, 3, CAST(80.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (184, 92, 4, CAST(88.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (185, 92, 5, CAST(96.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (186, 93, 6, CAST(80.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (187, 94, 7, CAST(150.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (188, 94, 8, CAST(165.00 AS Decimal(10, 2)), 3);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (189, 95, 9, CAST(150.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (190, 95, 10, CAST(165.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (191, 95, 11, CAST(180.00 AS Decimal(10, 2)), 4);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (192, 96, 12, CAST(150.00 AS Decimal(10, 2)), 5);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (193, 97, 13, CAST(150.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (194, 97, 14, CAST(165.00 AS Decimal(10, 2)), 6);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (195, 98, 15, CAST(300.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (196, 98, 16, CAST(330.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (197, 98, 17, CAST(360.00 AS Decimal(10, 2)), 7);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (198, 99, 18, CAST(300.00 AS Decimal(10, 2)), 1);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (199, 100, 19, CAST(300.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingDetail (DetailID, BookingID, RoomID, PricePerNight, NumNights) VALUES (200, 100, 20, CAST(330.00 AS Decimal(10, 2)), 2);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (1, 1, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (2, 1, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (3, 2, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (4, 2, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (5, 3, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (6, 3, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (7, 4, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (8, 5, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (9, 5, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (10, 6, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (11, 6, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (12, 7, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (13, 7, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (14, 8, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (15, 9, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (16, 9, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (17, 10, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (18, 10, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (19, 11, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (20, 11, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (21, 12, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (22, 13, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (23, 13, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (24, 14, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (25, 14, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (26, 15, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (27, 15, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (28, 15, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (29, 15, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (30, 16, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (31, 17, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (32, 17, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (33, 18, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (34, 18, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (35, 18, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (36, 19, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (37, 19, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (38, 19, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (39, 19, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (40, 20, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (41, 21, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (42, 21, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (43, 22, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (44, 22, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (45, 22, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (46, 23, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (47, 23, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (48, 23, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (49, 23, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (50, 24, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (51, 25, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (52, 25, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (53, 26, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (54, 26, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (55, 26, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (56, 27, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (57, 27, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (58, 27, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (59, 27, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (60, 28, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (61, 29, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (62, 29, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (63, 30, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (64, 30, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (65, 30, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (66, 31, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (67, 31, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (68, 32, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (69, 33, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (70, 33, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (71, 34, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (72, 34, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (73, 35, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (74, 35, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (75, 36, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (76, 37, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (77, 37, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (78, 38, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (79, 38, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (80, 39, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (81, 39, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (82, 40, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (83, 41, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (84, 41, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (85, 42, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (86, 42, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (87, 43, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (88, 43, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (89, 44, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (90, 45, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (91, 45, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (92, 46, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (93, 46, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (94, 46, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (95, 47, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (96, 47, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (97, 47, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (98, 47, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (99, 48, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (100, 49, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (101, 49, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (102, 50, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (103, 50, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (104, 50, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (105, 51, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (106, 51, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (107, 51, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (108, 51, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (109, 52, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (110, 53, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (111, 53, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (112, 54, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (113, 54, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (114, 54, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (115, 55, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (116, 55, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (117, 55, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (118, 55, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (119, 56, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (120, 57, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (121, 57, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (122, 58, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (123, 58, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (124, 58, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (125, 59, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (126, 59, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (127, 59, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (128, 59, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (129, 60, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (130, 61, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (131, 61, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (132, 62, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (133, 62, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (134, 63, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (135, 63, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (136, 64, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (137, 65, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (138, 65, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (139, 66, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (140, 66, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (141, 67, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (142, 67, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (143, 68, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (144, 69, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (145, 69, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (146, 70, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (147, 70, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (148, 71, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (149, 71, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (150, 72, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (151, 73, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (152, 73, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (153, 74, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (154, 74, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (155, 75, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (156, 75, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (157, 75, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (158, 75, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (159, 76, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (160, 77, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (161, 77, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (162, 78, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (163, 78, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (164, 78, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (165, 79, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (166, 79, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (167, 79, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (168, 79, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (169, 80, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (170, 81, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (171, 81, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (172, 82, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (173, 82, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (174, 82, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (175, 83, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (176, 83, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (177, 83, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (178, 83, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (179, 84, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (180, 85, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (181, 85, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (182, 86, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (183, 86, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (184, 86, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (185, 87, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (186, 87, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (187, 87, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (188, 87, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (189, 88, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (190, 89, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (191, 89, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (192, 90, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (193, 90, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (194, 90, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (195, 91, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (196, 91, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (197, 92, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (198, 93, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (199, 93, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (200, 94, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (201, 94, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (202, 95, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (203, 95, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (204, 96, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (205, 97, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (206, 97, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (207, 98, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (208, 98, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (209, 99, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (210, 99, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (211, 100, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (212, 101, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (213, 101, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (214, 102, 1, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (215, 102, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (216, 103, 2, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (217, 103, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (218, 104, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (219, 105, 3, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (220, 105, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (221, 106, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (222, 106, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (223, 106, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (224, 107, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (225, 107, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (226, 107, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (227, 107, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (228, 108, 4, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (229, 109, 5, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (230, 109, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (231, 110, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (232, 110, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (233, 110, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (234, 111, 6, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (235, 111, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (236, 111, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (237, 111, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (238, 112, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (239, 113, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (240, 113, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (241, 114, 7, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (242, 114, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (243, 114, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (244, 115, 8, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (245, 115, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (246, 115, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (247, 115, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (248, 116, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (249, 117, 9, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (250, 117, 15, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (251, 118, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (252, 118, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (253, 118, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (254, 119, 21, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (255, 119, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (256, 119, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (257, 119, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (258, 120, 10, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (259, 121, 11, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (260, 121, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (261, 122, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (262, 122, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (263, 123, 12, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (264, 123, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (265, 124, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (266, 125, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (267, 125, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (268, 126, 13, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (269, 126, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (270, 127, 14, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (271, 127, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (272, 128, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (273, 129, 15, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (274, 129, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (275, 130, 46, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (276, 130, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (277, 131, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (278, 131, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (279, 132, 16, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (280, 133, 17, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (281, 133, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (282, 134, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (283, 134, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (284, 135, 18, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (285, 135, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (286, 135, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (287, 135, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (288, 136, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (289, 137, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (290, 137, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (291, 138, 19, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (292, 138, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (293, 138, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (294, 139, 20, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (295, 139, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (296, 139, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (297, 139, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (298, 140, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (299, 141, 21, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (300, 141, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (301, 142, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (302, 142, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (303, 142, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (304, 143, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (305, 143, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (306, 143, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (307, 143, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (308, 144, 22, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (309, 145, 23, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (310, 145, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (311, 146, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (312, 146, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (313, 146, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (314, 147, 24, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (315, 147, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (316, 147, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (317, 147, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (318, 148, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (319, 149, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (320, 149, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (321, 150, 25, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (322, 150, 26, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (323, 150, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (324, 151, 26, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (325, 151, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (326, 152, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (327, 153, 27, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (328, 153, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (329, 154, 2, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (330, 154, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (331, 155, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (332, 155, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (333, 156, 28, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (334, 157, 29, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (335, 157, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (336, 158, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (337, 158, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (338, 159, 30, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (339, 159, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (340, 160, 41, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (341, 161, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (342, 161, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (343, 162, 31, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (344, 162, 4, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (345, 163, 32, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (346, 163, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (347, 164, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (348, 165, 33, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (349, 165, 27, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (350, 166, 30, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (351, 166, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (352, 166, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (353, 167, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (354, 167, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (355, 167, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (356, 167, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (357, 168, 34, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (358, 169, 35, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (359, 169, 3, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (360, 170, 6, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (361, 170, 7, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (362, 170, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (363, 171, 36, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (364, 171, 16, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (365, 171, 17, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (366, 171, 18, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (367, 172, 19, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (368, 173, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (369, 173, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (370, 174, 37, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (371, 174, 32, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (372, 174, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (373, 175, 38, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (374, 175, 42, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (375, 175, 43, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (376, 175, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (377, 176, 45, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (378, 177, 39, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (379, 177, 5, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (380, 178, 8, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (381, 178, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (382, 178, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (383, 179, 11, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (384, 179, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (385, 179, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (386, 179, 14, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (387, 180, 40, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (388, 181, 41, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (389, 181, 31, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (390, 182, 34, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (391, 182, 35, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (392, 183, 42, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (393, 183, 44, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (394, 184, 47, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (395, 185, 50, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (396, 185, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (397, 186, 43, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (398, 186, 10, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (399, 187, 44, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (400, 187, 20, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (401, 188, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (402, 189, 45, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (403, 189, 33, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (404, 190, 36, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (405, 190, 37, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (406, 191, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (407, 191, 40, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (408, 192, 46, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (409, 193, 47, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (410, 193, 9, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (411, 194, 12, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (412, 194, 13, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (413, 195, 48, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (414, 195, 22, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (415, 195, 23, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (416, 195, 24, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (417, 196, 25, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (418, 197, 28, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (419, 197, 29, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (420, 198, 49, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (421, 198, 38, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (422, 198, 39, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (423, 199, 50, 1);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (424, 199, 48, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (425, 199, 49, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (426, 199, 1, 0);
INSERT INTO BookingGuest (BookingGuestID, DetailID, GuestID, IsPrimaryGuest) VALUES (427, 200, 2, 0);
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (1, 1, 4, 1, '2024-01-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (2, 2, 7, 1, '2024-08-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (3, 2, 4, 2, '2024-08-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (4, 3, 10, 1, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (5, 3, 7, 2, '2024-03-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (6, 3, 4, 3, '2024-03-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (7, 4, 3, 1, '2024-10-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (8, 4, 10, 2, '2024-10-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (9, 4, 7, 3, '2024-10-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (10, 4, 4, 1, '2024-10-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (11, 6, 9, 1, '2024-12-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (12, 7, 2, 1, '2024-07-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (13, 7, 9, 2, '2024-07-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (14, 8, 5, 1, '2024-02-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (15, 8, 2, 2, '2024-02-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (16, 8, 9, 3, '2024-02-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (17, 9, 8, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (18, 9, 5, 2, '2024-09-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (19, 9, 2, 3, '2024-09-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (20, 9, 9, 1, '2024-09-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (21, 11, 4, 1, '2024-11-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (22, 12, 7, 1, '2024-06-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (23, 12, 4, 2, '2024-06-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (24, 13, 10, 1, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (25, 13, 7, 2, '2024-01-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (26, 13, 4, 3, '2024-01-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (27, 14, 3, 1, '2024-08-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (28, 14, 10, 2, '2024-08-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (29, 14, 7, 3, '2024-08-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (30, 14, 4, 1, '2024-08-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (31, 16, 9, 1, '2024-10-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (32, 17, 2, 1, '2024-05-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (33, 17, 9, 2, '2024-05-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (34, 18, 5, 1, '2024-01-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (35, 18, 2, 2, '2024-01-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (36, 18, 9, 3, '2024-01-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (37, 19, 8, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (38, 19, 5, 2, '2024-08-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (39, 19, 2, 3, '2024-08-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (40, 19, 9, 1, '2024-08-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (41, 21, 4, 1, '2024-10-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (42, 22, 7, 1, '2024-05-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (43, 22, 4, 2, '2024-05-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (44, 23, 10, 1, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (45, 23, 7, 2, '2024-12-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (46, 23, 4, 3, '2024-12-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (47, 24, 3, 1, '2024-07-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (48, 24, 10, 2, '2024-07-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (49, 24, 7, 3, '2024-07-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (50, 24, 4, 1, '2024-07-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (51, 26, 9, 1, '2024-09-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (52, 27, 2, 1, '2024-04-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (53, 27, 9, 2, '2024-04-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (54, 28, 5, 1, '2024-11-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (55, 28, 2, 2, '2024-11-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (56, 28, 9, 3, '2024-11-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (57, 29, 8, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (58, 29, 5, 2, '2024-06-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (59, 29, 2, 3, '2024-06-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (60, 29, 9, 1, '2024-06-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (61, 31, 4, 1, '2024-08-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (62, 32, 7, 1, '2024-03-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (63, 32, 4, 2, '2024-03-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (64, 33, 10, 1, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (65, 33, 7, 2, '2024-10-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (66, 33, 4, 3, '2024-10-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (67, 34, 3, 1, '2024-05-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (68, 34, 10, 2, '2024-05-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (69, 34, 7, 3, '2024-05-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (70, 34, 4, 1, '2024-05-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (71, 36, 9, 1, '2024-08-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (72, 37, 2, 1, '2024-03-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (73, 37, 9, 2, '2024-03-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (74, 38, 5, 1, '2024-10-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (75, 38, 2, 2, '2024-10-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (76, 38, 9, 3, '2024-10-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (77, 39, 8, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (78, 39, 5, 2, '2024-05-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (79, 39, 2, 3, '2024-05-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (80, 39, 9, 1, '2024-05-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (81, 41, 4, 1, '2024-07-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (82, 42, 7, 1, '2024-02-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (83, 42, 4, 2, '2024-02-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (84, 43, 10, 1, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (85, 43, 7, 2, '2024-09-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (86, 43, 4, 3, '2024-09-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (87, 44, 3, 1, '2024-04-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (88, 44, 10, 2, '2024-04-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (89, 44, 7, 3, '2024-04-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (90, 44, 4, 1, '2024-04-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (91, 46, 9, 1, '2024-06-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (92, 47, 2, 1, '2024-01-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (93, 47, 9, 2, '2024-01-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (94, 48, 5, 1, '2024-08-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (95, 48, 2, 2, '2024-08-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (96, 48, 9, 3, '2024-08-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (97, 49, 8, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (98, 49, 5, 2, '2024-03-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (99, 49, 2, 3, '2024-03-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (100, 49, 9, 1, '2024-03-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (101, 51, 4, 1, '2024-06-01', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (102, 52, 7, 1, '2024-01-04', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (103, 52, 4, 2, '2024-01-04', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (104, 53, 10, 1, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (105, 53, 7, 2, '2024-08-07', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (106, 53, 4, 3, '2024-08-07', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (107, 54, 3, 1, '2024-03-10', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (108, 54, 10, 2, '2024-03-10', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (109, 54, 7, 3, '2024-03-10', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (110, 54, 4, 1, '2024-03-10', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (111, 56, 9, 1, '2024-05-16', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (112, 57, 2, 1, '2024-12-19', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (113, 57, 9, 2, '2024-12-19', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (114, 58, 5, 1, '2024-07-22', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (115, 58, 2, 2, '2024-07-22', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (116, 58, 9, 3, '2024-07-22', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (117, 59, 8, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (118, 59, 5, 2, '2024-02-25', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (119, 59, 2, 3, '2024-02-25', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (120, 59, 9, 1, '2024-02-25', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (121, 61, 4, 1, '2025-04-06', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (122, 62, 7, 1, '2025-11-09', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (123, 62, 4, 2, '2025-11-09', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (124, 63, 10, 1, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (125, 63, 7, 2, '2025-06-12', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (126, 63, 4, 3, '2025-06-12', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (127, 64, 3, 1, '2025-01-15', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (128, 64, 10, 2, '2025-01-15', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (129, 64, 7, 3, '2025-01-15', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (130, 64, 4, 1, '2025-01-15', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (131, 66, 9, 1, '2025-03-21', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (132, 67, 2, 1, '2025-10-24', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (133, 67, 9, 2, '2025-10-24', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (134, 68, 5, 1, '2025-06-02', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (135, 68, 2, 2, '2025-06-02', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (136, 68, 9, 3, '2025-06-02', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (137, 69, 8, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (138, 69, 5, 2, '2025-01-05', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (139, 69, 2, 3, '2025-01-05', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (140, 69, 9, 1, '2025-01-05', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (141, 71, 4, 1, '2025-03-11', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (142, 72, 7, 1, '2025-10-14', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (143, 72, 4, 2, '2025-10-14', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (144, 73, 10, 1, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (145, 73, 7, 2, '2025-05-17', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (146, 73, 4, 3, '2025-05-17', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (147, 74, 3, 1, '2025-12-20', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (148, 74, 10, 2, '2025-12-20', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (149, 74, 7, 3, '2025-12-20', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (150, 74, 4, 1, '2025-12-20', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (151, 76, 9, 1, '2025-02-01', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (152, 77, 2, 1, '2025-09-04', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (153, 77, 9, 2, '2025-09-04', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (154, 78, 5, 1, '2025-04-07', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (155, 78, 2, 2, '2025-04-07', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (156, 78, 9, 3, '2025-04-07', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (157, 79, 8, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (158, 79, 5, 2, '2025-11-10', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (159, 79, 2, 3, '2025-11-10', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (160, 79, 9, 1, '2025-11-10', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (161, 81, 4, 1, '2025-01-16', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (162, 82, 7, 1, '2025-08-19', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (163, 82, 4, 2, '2025-08-19', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (164, 83, 10, 1, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (165, 83, 7, 2, '2025-03-22', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (166, 83, 4, 3, '2025-03-22', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (167, 84, 3, 1, '2025-10-25', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (168, 84, 10, 2, '2025-10-25', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (169, 84, 7, 3, '2025-10-25', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (170, 84, 4, 1, '2025-10-25', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (171, 86, 9, 1, '2025-01-06', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (172, 87, 2, 1, '2025-08-09', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (173, 87, 9, 2, '2025-08-09', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (174, 88, 5, 1, '2025-03-12', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (175, 88, 2, 2, '2025-03-12', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (176, 88, 9, 3, '2025-03-12', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (177, 89, 8, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (178, 89, 5, 2, '2025-10-15', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (179, 89, 2, 3, '2025-10-15', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (180, 89, 9, 1, '2025-10-15', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (181, 91, 4, 1, '2025-12-21', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (182, 92, 7, 1, '2025-07-24', CAST(5.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (183, 92, 4, 2, '2025-07-24', CAST(16.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (184, 93, 10, 1, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (185, 93, 7, 2, '2025-02-02', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (186, 93, 4, 3, '2025-02-02', CAST(24.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (187, 94, 3, 1, '2025-09-05', CAST(25.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (188, 94, 10, 2, '2025-09-05', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (189, 94, 7, 3, '2025-09-05', CAST(15.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (190, 94, 4, 1, '2025-09-05', CAST(8.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (191, 96, 9, 1, '2025-11-11', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (192, 97, 2, 1, '2025-06-14', CAST(10.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (193, 97, 9, 2, '2025-06-14', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (194, 98, 5, 1, '2025-01-17', CAST(50.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (195, 98, 2, 2, '2025-01-17', CAST(20.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (196, 98, 9, 3, '2025-01-17', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (197, 99, 8, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (198, 99, 5, 2, '2025-08-20', CAST(100.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (199, 99, 2, 3, '2025-08-20', CAST(30.00 AS Decimal(10, 2)));
INSERT INTO BookingService (BookingServiceID, BookingID, ServiceID, Quantity, ServiceDate, TotalCost) VALUES (200, 99, 9, 1, '2025-08-20', CAST(0.00 AS Decimal(10, 2)));`,
    questions: [
      {
        id: 1,
        title: "Question 1: University Course Registration ERD (Chen Notation)",
        description: "Create tables for Students (studentID PK, name, email), Courses (courseID PK, courseName, credits), Instructors (instructorID PK, name), and Enrollments (studentID FK, courseID FK, semester, grade).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Students (\n    studentID INT PRIMARY KEY,\n    name NVARCHAR(100)\n);",
        solutionSQL: `CREATE TABLE Students (\n    studentID INT PRIMARY KEY,\n    name NVARCHAR(100),\n    email NVARCHAR(100)\n);\n\nCREATE TABLE Instructors (\n    instructorID INT PRIMARY KEY,\n    name NVARCHAR(100)\n);\n\nCREATE TABLE Courses (\n    courseID INT PRIMARY KEY,\n    courseName NVARCHAR(100),\n    credits INT,\n    instructorID INT,\n    FOREIGN KEY (instructorID) REFERENCES Instructors(instructorID)\n);\n\nCREATE TABLE Enrollments (\n    studentID INT,\n    courseID INT,\n    semester NVARCHAR(20),\n    grade DECIMAL(3,1),\n    PRIMARY KEY (studentID, courseID, semester),\n    FOREIGN KEY (studentID) REFERENCES Students(studentID),\n    FOREIGN KEY (courseID) REFERENCES Courses(courseID)\n);`
      },
      {
        id: 2,
        title: "Question 2: List all Rooms on Floor 3 or higher",
        description: "Display RoomID, RoomNumber, RoomTypeID, Floor, Status for rooms on floor >= 3.",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT RoomID, RoomNumber, RoomTypeID, Floor, Status FROM Room WHERE Floor >= 3 ORDER BY Floor ASC, RoomNumber ASC;"
      },
      {
        id: 3,
        title: "Question 3: Bookings paid via Credit Card or Online",
        description: "Display BookingID, GuestID, TotalAmount, PaymentMethod, PaymentDate for bookings with PaymentMethod in ('Credit Card', 'Online').",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT BookingID, GuestID, TotalAmount, PaymentMethod, PaymentDate FROM Booking WHERE PaymentMethod IN ('Credit Card', 'Online') ORDER BY TotalAmount DESC;"
      },
      {
        id: 4,
        title: "Question 4: Room Booking Occupancy Details",
        description: "Display RoomNumber, TypeName, GuestName, IsPrimaryGuest for all room bookings in 2024.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT r.RoomNumber, rt.TypeName, g.FirstName || ' ' || g.LastName AS GuestName, bg.IsPrimaryGuest FROM BookingGuest bg JOIN Guest g ON bg.GuestID = g.GuestID JOIN BookingDetail bd ON bg.DetailID = bd.DetailID JOIN Room r ON bd.RoomID = r.RoomID JOIN RoomType rt ON r.RoomTypeID = rt.RoomTypeID ORDER BY r.RoomNumber;"
      },
      {
        id: 5,
        title: "Question 5: Payment Status Revenue Breakdown",
        description: "Calculate total amount and booking count for each PaymentStatus.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT PaymentStatus, COUNT(BookingID) AS TotalBookings, SUM(TotalAmount) AS TotalRevenue FROM Booking GROUP BY PaymentStatus ORDER BY TotalRevenue DESC;"
      },
      {
        id: 6,
        title: "Question 6: Guests with Total Spending Above 5000",
        description: "Find all guests whose total booking spending exceeds 5000.",
        initialCode: "-- Question 6: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT g.GuestID, g.FirstName || ' ' || g.LastName AS FullName, SUM(b.TotalAmount) AS TotalSpent FROM Guest g JOIN Booking b ON g.GuestID = b.GuestID GROUP BY g.GuestID, FullName HAVING SUM(b.TotalAmount) > 5000 ORDER BY TotalSpent DESC;"
      },
      {
        id: 7,
        title: "Question 7: Most Booked Room in the Hotel",
        description: "Find the RoomID and RoomNumber that has the highest number of bookings.",
        initialCode: "-- Question 7: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT r.RoomID, r.RoomNumber, COUNT(bd.BookingID) AS TotalBookings FROM Room r JOIN BookingDetail bd ON r.RoomID = bd.RoomID GROUP BY r.RoomID, r.RoomNumber ORDER BY TotalBookings DESC LIMIT 1;"
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure getGuestSummary (T-SQL Reference)",
        description: "Write stored procedure getGuestSummary(@guestID INT) returning guest info and total spending.",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE getGuestSummary\n    @guestID INT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE getGuestSummary\n    @guestID INT\nAS\nBEGIN\n    SELECT g.GuestID, g.FirstName, g.LastName, COUNT(b.BookingID) AS TotalBookings, SUM(b.TotalAmount) AS TotalSpent\n    FROM Guest g\n    LEFT JOIN Booking b ON g.GuestID = b.GuestID\n    WHERE g.GuestID = @guestID\n    GROUP BY g.GuestID, g.FirstName, g.LastName\nEND`
      },
      {
        id: 9,
        title: "Question 9: Trigger trg_CheckMaxOccupancy (T-SQL Reference)",
        description: "Trigger on BookingGuest to verify number of guests per room doesn't exceed MaxOccupancy.",
        initialCode: "-- Question 9: Trigger (T-SQL Reference)\nCREATE TRIGGER trg_CheckMaxOccupancy\nON BookingGuest\nINSTEAD OF INSERT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE TRIGGER trg_CheckMaxOccupancy\nON BookingGuest\nINSTEAD OF INSERT\nAS\nBEGIN\n    INSERT INTO BookingGuest (DetailID, GuestID, IsPrimaryGuest)\n    SELECT i.DetailID, i.GuestID, i.IsPrimaryGuest\n    FROM inserted i;\nEND`
      },
      {
        id: 10,
        title: "Question 10: Mark Completed Bookings as Checked-Out",
        description: "Update Booking Status to 'Checked-Out' for bookings where CheckOutDate < CURRENT_DATE and Status = 'Checked-In'.",
        initialCode: "-- Question 10: Write your UPDATE SQL here\nUPDATE Booking\nSET Status = ",
        solutionSQL: "UPDATE Booking SET Status = 'Checked-Out' WHERE CheckOutDate < '2024-09-01' AND Status = 'Checked-In';"
      }
    ]
  },

  // ==================== EXAM 5 ====================
  {
    id: 'pe_exam5',
    code: 'DBI202_PE_CARS_DEALERSHIP',
    title: 'PE DBI202 - Đề 5 (Car Dealership & Maintenance)',
    subtitle: 'Hệ Thống Bán & Bảo Dưỡng Ô Tô',
    description: 'Đề thi thực hành PE SQL: Quản lý đại lý xe hơi (Cars, SalesInvoice, ServiceTicket, Mechanics, PartsUsed). Đầy đủ 10 câu hỏi kèm đáp án mẫu.',
    icon: '🚗',
    badgeClass: 'badge-db',
    themeColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 50%, #fbbf24 100%)',
    erdDiagramHtml: `
<div class="erd-diagram-wrapper">
  <div class="erd-diagram-header">
    <div class="erd-header-title">
      <span class="erd-badge">🚗 SƠ ĐỒ THỰC THỂ QUAN HỆ (CARS & AUTO MAINTENANCE)</span>
    </div>
  </div>
  <div style="padding: 1.5rem; color: #94a3b8; font-size: 0.9rem;">
    Các bảng CSDL: <b>Cars</b> (carID, serialNumber, model, colour, year), <b>Customer</b> (custID, custName, phone, sex, cusAddress), <b>SalesInvoice</b> (invoiceID, custID, carID, salesID, date), <b>ServiceTicket</b> (serviceTicketID, custID, carID, dateReturned), <b>Mechanic</b> (mechanicID, mechanicName), <b>ServiceMechanic</b> (serviceTicketID, mechanicID, hours).
  </div>
</div>
`,
    schemaDetails: [
      {
        tableName: 'Cars',
        description: 'Bảng thông tin xe hơi',
        columns: [
          { name: 'carID', type: 'INT', isPk: true },
          { name: 'serialNumber', type: 'VARCHAR(50)' },
          { name: 'model', type: 'VARCHAR(100)' },
          { name: 'colour', type: 'VARCHAR(50)' },
          { name: 'year', type: 'INT' }
        ]
      },
      {
        tableName: 'Customer',
        description: 'Bảng khách hàng mua & sửa xe',
        columns: [
          { name: 'custID', type: 'VARCHAR(50)', isPk: true },
          { name: 'custName', type: 'NVARCHAR(200)' },
          { name: 'phone', type: 'VARCHAR(20)' },
          { name: 'sex', type: 'VARCHAR(10)' },
          { name: 'cusAddress', type: 'NVARCHAR(200)' }
        ]
      }
    ],
    dbScript: `
CREATE TABLE Customers (
    custID VARCHAR(50) PRIMARY KEY,
    custName NVARCHAR(200),
    custAddress NVARCHAR(200)
);

CREATE TABLE Rooms (
    roomID VARCHAR(50) PRIMARY KEY,
    roomName NVARCHAR(200),
    roomPrice DECIMAL(10,2)
);

CREATE TABLE Services (
    serviceID VARCHAR(50) PRIMARY KEY,
    serviceName NVARCHAR(200),
    servicePrice DECIMAL(10,2)
);

CREATE TABLE Contracts (
    contractID VARCHAR(50) PRIMARY KEY,
    custID VARCHAR(50) REFERENCES Customers(custID),
    roomID VARCHAR(50) REFERENCES Rooms(roomID),
    serviceID VARCHAR(50) REFERENCES Services(serviceID),
    quantity INT
);

CREATE TABLE Cars (
    carID INT PRIMARY KEY,
    serialNumber VARCHAR(50),
    model VARCHAR(100),
    colour VARCHAR(50),
    year INT
);

INSERT INTO Cars VALUES (1, 'SN001', 'Sedan Camry', 'Black', 2021);
INSERT INTO Cars VALUES (2, 'SN002', 'SUV Fortuner', 'White', 2022);
INSERT INTO Cars VALUES (3, 'SN003', 'Hatchback Yaris', 'Black', 2020);
INSERT INTO Cars VALUES (4, 'SN004', 'Truck Hilux', 'Silver', 2023);
INSERT INTO Cars VALUES (5, 'SN005', 'Coupe Supra', 'Black', 2021);
`,
    questions: [
      {
        id: 1,
        title: "Question 1: Create Hotel Contract Tables derived from ERD",
        description: "Create tables: Customers (custID PK, custName, custAddress), Rooms (roomID PK, roomName, roomPrice), Services (serviceID PK, serviceName, servicePrice), Contracts (contractID PK, custID FK, roomID FK, serviceID FK, quantity).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Customers (\n    custID VARCHAR(50) PRIMARY KEY,\n    custName NVARCHAR(200),\n    custAddress NVARCHAR(200)\n);",
        solutionSQL: `CREATE TABLE Customers (\n    custID VARCHAR(50) PRIMARY KEY,\n    custName NVARCHAR(200),\n    custAddress NVARCHAR(200)\n);\n\nCREATE TABLE Rooms (\n    roomID VARCHAR(50) PRIMARY KEY,\n    roomName NVARCHAR(200),\n    roomPrice DECIMAL(10,2)\n);\n\nCREATE TABLE Services (\n    serviceID VARCHAR(50) PRIMARY KEY,\n    serviceName NVARCHAR(200),\n    servicePrice DECIMAL(10,2)\n);\n\nCREATE TABLE Contracts (\n    contractID VARCHAR(50) PRIMARY KEY,\n    custID VARCHAR(50),\n    roomID VARCHAR(50),\n    serviceID VARCHAR(50),\n    quantity INT,\n    FOREIGN KEY (custID) REFERENCES Customers(custID),\n    FOREIGN KEY (roomID) REFERENCES Rooms(roomID),\n    FOREIGN KEY (serviceID) REFERENCES Services(serviceID)\n);`
      },
      {
        id: 2,
        title: "Question 2: Select all Black Cars",
        description: "Write an SQL query to select model, year from Cars where colour is 'Black'.",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT model, year FROM Cars WHERE colour = 'Black' ORDER BY year DESC;"
      },
      {
        id: 3,
        title: "Question 3: Customers with 3 or more Invoices",
        description: "Select custName, phone, sex, cusAddress, COUNT(invoiceID) for customers having >= 3 invoices.",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT c.custName, c.phone, c.sex, c.cusAddress, COUNT(s.invoiceID) AS NumberOfInvoiceID FROM Customer c JOIN SalesInvoice s ON c.custID = s.custID GROUP BY c.custName, c.phone, c.sex, c.cusAddress HAVING COUNT(s.invoiceID) >= 3;"
      },
      {
        id: 4,
        title: "Question 4: Service Tickets returned in Q1 2021",
        description: "Select custName, model, serviceTicketID, dateReturned for tickets returned between 2021-01-01 and 2021-03-31.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT C.custName, Ca.model, ST.serviceTicketID, ST.dateReturned FROM ServiceTicket ST JOIN Customer C ON ST.custID = C.custID JOIN Cars Ca ON ST.carID = Ca.carID WHERE ST.dateReturned BETWEEN '2021-01-01' AND '2021-03-31';"
      },
      {
        id: 5,
        title: "Question 5: Mechanic with Most Working Hours in 2021",
        description: "Find the mechanic who worked the highest sum of hours in year 2021.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT M.mechanicName, SUM(SM.hours) AS sumHours FROM ServiceMechanic SM JOIN Mechanic M ON SM.mechanicID = M.mechanicID JOIN ServiceTicket ST ON SM.serviceTicketID = ST.serviceTicketID WHERE strftime('%Y', ST.dateReturned) = '2021' GROUP BY M.mechanicName ORDER BY sumHours DESC LIMIT 1;"
      },
      {
        id: 6,
        title: "Question 6: Stored Procedure proc_serviceTicket_part (T-SQL Reference)",
        description: "Write stored procedure proc_serviceTicket_part(@serviceTicketID INT, @numberOfParts INT OUTPUT) to count distinct parts used.",
        initialCode: "-- Question 6: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE proc_serviceTicket_part\n    @serviceTicketID INT,\n    @numberOfParts INT OUTPUT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE proc_serviceTicket_part\n    @serviceTicketID INT,\n    @numberOfParts INT OUTPUT\nAS\nBEGIN\n    SELECT @numberOfParts = COUNT(DISTINCT partID)\n    FROM PartsUsed\n    WHERE serviceTicketID = @serviceTicketID;\nEND;`
      },
      {
        id: 7,
        title: "Question 7: Trigger tr_insert_car (T-SQL Reference)",
        description: "Trigger on Cars after insert to select cars having same model and year as inserted.",
        initialCode: "-- Question 7: Trigger (T-SQL Reference)\nCREATE TRIGGER tr_insert_car\nON Cars\nAFTER INSERT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE TRIGGER tr_insert_car\nON Cars\nAFTER INSERT\nAS\nBEGIN\n    SELECT carID, serialNumber, model, colour, year\n    FROM Cars\n    WHERE year = (SELECT year FROM inserted)\n      AND model = (SELECT model FROM inserted);\nEND;`
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure proc_salesPerson_invoice (T-SQL Reference)",
        description: "Count distinct invoices by salesperson.",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE proc_salesPerson_invoice\n    @salesID DECIMAL(18,0),\n    @numberOfInvoices INT OUTPUT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE proc_salesPerson_invoice\n    @salesID DECIMAL(18,0),\n    @numberOfInvoices INT OUTPUT\nAS\nBEGIN\n    SELECT @numberOfInvoices = COUNT(DISTINCT invoiceID)\n    FROM SalesInvoice\n    WHERE salesID = @salesID;\nEND;`
      },
      {
        id: 9,
        title: "Question 9: Delete ServiceMechanic record",
        description: "Delete from ServiceMechanic where serviceID = 12.",
        initialCode: "-- Question 9: Write your DELETE SQL here\nDELETE FROM ServiceMechanic WHERE ",
        solutionSQL: "DELETE FROM ServiceMechanic WHERE serviceID = 12;"
      },
      {
        id: 10,
        title: "Question 10: Table-Valued Function f_tk (T-SQL Reference)",
        description: "Create function f_tk(@mechanicID DECIMAL(18,0)) returning mechanicID, mechanicName, sumHours.",
        initialCode: "-- Question 10: Function (T-SQL Reference)\nCREATE FUNCTION f_tk(@mechanicID DECIMAL(18,0))\nRETURNS TABLE\nAS\nRETURN\n(\n    -- Code here\n);",
        solutionSQL: `CREATE FUNCTION f_tk(@mechanicID DECIMAL(18,0))\nRETURNS TABLE\nAS\nRETURN\n(\n    SELECT M.mechanicID, M.mechanicName, SUM(SM.hours) AS sumHours\n    FROM Mechanic M\n    JOIN ServiceMechanic SM ON M.mechanicID = SM.mechanicID\n    WHERE M.mechanicID = @mechanicID\n    GROUP BY M.mechanicID, M.mechanicName\n);`
      }
    ]
  },

  // ==================== EXAM 6 ====================
  {
    id: 'pe_exam6',
    code: 'DBI202_PE_SP2026_NORTHWIND',
    title: 'PE DBI202 - Đề 6 (Spring 2026)',
    subtitle: 'Northwind E-Commerce System (SP26)',
    description: 'Đề thi thực hành PE SQL Spring 2026 chính thức: Hệ thống thương mại điện tử 8 bảng (customers, products, orders, order_details, suppliers, categories, shippers, employees).',
    icon: '🛒',
    badgeClass: 'badge-db',
    themeColor: '#10b981',
    gradient: 'linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)',
    erdDiagramHtml: `
<div class="erd-diagram-wrapper">
  <div class="erd-diagram-header">
    <div class="erd-header-title">
      <span class="erd-badge">🛒 SƠ ĐỒ THỰC THỂ QUAN HỆ (NORTHWIND E-COMMERCE SP26 - 8 BẢNG)</span>
    </div>
  </div>
  <div style="padding: 1.5rem; color: #94a3b8; font-size: 0.9rem;">
    Các bảng CSDL: <b>customers</b> (CustomerID, CustomerName, ContactName, City, Country), <b>products</b> (ProductID, ProductName, SupplierID, CategoryID, Unit, Price), <b>orders</b> (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID), <b>order_details</b> (OrderDetailID, OrderID, ProductID, Quantity), <b>categories</b>, <b>suppliers</b>, <b>shippers</b>, <b>employees</b>.
  </div>
</div>
`,
    schemaDetails: [
      {
        tableName: 'customers',
        description: 'Bảng khách hàng đặt hàng',
        columns: [
          { name: 'CustomerID', type: 'INT', isPk: true },
          { name: 'CustomerName', type: 'VARCHAR(255)' },
          { name: 'ContactName', type: 'VARCHAR(255)' },
          { name: 'City', type: 'VARCHAR(255)' },
          { name: 'Country', type: 'VARCHAR(255)' }
        ]
      },
      {
        tableName: 'products',
        description: 'Bảng sản phẩm bày bán',
        columns: [
          { name: 'ProductID', type: 'INT', isPk: true },
          { name: 'ProductName', type: 'VARCHAR(255)' },
          { name: 'SupplierID', type: 'INT', isFk: true },
          { name: 'CategoryID', type: 'INT', isFk: true },
          { name: 'Price', type: 'DECIMAL(10,2)' }
        ]
      },
      {
        tableName: 'orders',
        description: 'Bảng đơn hàng',
        columns: [
          { name: 'OrderID', type: 'INT', isPk: true },
          { name: 'CustomerID', type: 'INT', isFk: true },
          { name: 'OrderDate', type: 'DATE' },
          { name: 'ShipperID', type: 'INT', isFk: true }
        ]
      },
      {
        tableName: 'order_details',
        description: 'Bảng chi tiết đơn hàng',
        columns: [
          { name: 'OrderDetailID', type: 'INT', isPk: true },
          { name: 'OrderID', type: 'INT', isFk: true },
          { name: 'ProductID', type: 'INT', isFk: true },
          { name: 'Quantity', type: 'INT' }
        ]
      }
    ],
    dbScript: `CREATE TABLE categories (
  CategoryID int primary key,
  CategoryName varchar(255) DEFAULT NULL,
  Description varchar(255) DEFAULT NULL
);

CREATE TABLE shippers (
  ShipperID int primary key,
  ShipperName varchar(255) DEFAULT NULL,
  Phone varchar(255) DEFAULT NULL
);

CREATE TABLE customers (
  CustomerID int primary key,
  CustomerName varchar(255) DEFAULT NULL,
  ContactName varchar(255) DEFAULT NULL,
  Address varchar(255) DEFAULT NULL,
  City varchar(255) DEFAULT NULL,
  PostalCode varchar(255) DEFAULT NULL,
  Country varchar(255) DEFAULT NULL
);

CREATE TABLE employees (
  EmployeeID int primary key,
  LastName varchar(255) DEFAULT NULL,
  FirstName varchar(255) DEFAULT NULL,
  BirthDate date DEFAULT NULL,
  Photo varchar(255) DEFAULT NULL,
  Notes TEXT
);

CREATE TABLE orders (
  OrderID int primary key,
  CustomerID int REFERENCES customers,
  EmployeeID int REFERENCES Employees,
  OrderDate date DEFAULT NULL,
  ShipperID int REFERENCES Shippers
);

CREATE TABLE suppliers (
  SupplierID int primary key,
  SupplierName varchar(255) DEFAULT NULL,
  ContactName varchar(255) DEFAULT NULL,
  Address varchar(255) DEFAULT NULL,
  City varchar(255) DEFAULT NULL,
  PostalCode varchar(255) DEFAULT NULL,
  Country varchar(255) DEFAULT NULL,
  Phone varchar(255) DEFAULT NULL
);

CREATE TABLE products (
  ProductID int  primary key,
  ProductName varchar(255) DEFAULT NULL,
  SupplierID int  REFERENCES Suppliers,
  CategoryID int  REFERENCES Categories,
  Unit varchar(50) DEFAULT NULL,
  Price float NULL
);

CREATE TABLE order_details (
  OrderDetailID int NOT NULL,
  OrderID int REFERENCES Orders,
  ProductID int REFERENCES Products,
  Quantity int DEFAULT NULL
);

INSERT INTO categories (CategoryID, CategoryName, Description) VALUES
(1, 'Beverages', 'Soft drinks, coffees, teas, beers, and ales'),
(2, 'Condiments', 'Sweet and savory sauces, relishes, spreads, and seasonings'),
(3, 'Confections', 'Desserts, candies, and sweet breads'),
(4, 'Dairy Products', 'Cheeses'),
(5, 'Grains/Cereals', 'Breads, crackers, pasta, and cereal'),
(6, 'Meat/Poultry', 'Prepared meats'),
(7, 'Produce', 'Dried fruit and bean curd'),
(8, 'Seafood', 'Seaweed and fish');

INSERT INTO shippers (ShipperID, ShipperName, Phone) 
VALUES
(1, 'Speedy Express', '(503) 555-9831'),
(2, 'United Package', '(503) 555-3199'),
(3, 'Federal Shipping', '(503) 555-9931');

INSERT INTO customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES
(1, 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany'),
(2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico'),
(3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico'),
(4, 'Around the Horn', 'Thomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK'),
(5, 'Berglunds snabbköp', 'Christina Berglund', 'Berguvsvägen 8', 'Luleå', 'S-958 22', 'Sweden'),
(6, 'Blauer See Delikatessen', 'Hanna Moos', 'Forsterstr. 57', 'Mannheim', '68306', 'Germany'),
(7, 'Blondel père et fils', 'Frédérique Citeaux', '24, place Kléber', 'Strasbourg', '67000', 'France'),
(8, 'Bólido Comidas preparadas', 'Martín Sommer', 'C/ Araquil, 67', 'Madrid', '28023', 'Spain'),
(9, 'Bon app', 'Laurence Lebihans', '12, rue des Bouchers', 'Marseille', '13008', 'France'),
(10, 'Bottom-Dollar Marketse', 'Elizabeth Lincoln', '23 Tsawassen Blvd.', 'Tsawassen', 'T2F 8M4', 'Canada'),
(11, 'Bs Beverages', 'Victoria Ashworth', 'Fauntleroy Circus', 'London', 'EC2 5NT', 'UK'),
(12, 'Cactus Comidas para llevar', 'Patricio Simpson', 'Cerrito 333', 'Buenos Aires', '1010', 'Argentina'),
(13, 'Centro comercial Moctezuma', 'Francisco Chang', 'Sierras de Granada 9993', 'México D.F.', '05022', 'Mexico'),
(14, 'Chop-suey Chinese', 'Yang Wang', 'Hauptstr. 29', 'Bern', '3012', 'Switzerland'),
(15, 'Comércio Mineiro', 'Pedro Afonso', 'Av. dos Lusíadas, 23', 'São Paulo', '05432-043', 'Brazil'),
(16, 'Consolidated Holdings', 'Elizabeth Brown', 'Berkeley Gardens 12 Brewery', 'London', 'WX1 6LT', 'UK'),
(17, 'Drachenblut Delikatessend', 'Sven Ottlieb', 'Walserweg 21', 'Aachen', '52066', 'Germany'),
(18, 'Du monde entier', 'Janine Labrune', '67, rue des Cinquante Otages', 'Nantes', '44000', 'France'),
(19, 'Eastern Connection', 'Ann Devon', '35 King George', 'London', 'WX3 6FW', 'UK'),
(20, 'Ernst Handel', 'Roland Mendel', 'Kirchgasse 6', 'Graz', '8010', 'Austria'),
(21, 'Familia Arquibaldo', 'Aria Cruz', 'Rua Orós, 92', 'São Paulo', '05442-030', 'Brazil'),
(22, 'FISSA Fabrica Inter. Salchichas S.A.', 'Diego Roel', 'C/ Moralzarzal, 86', 'Madrid', '28034', 'Spain'),
(23, 'Folies gourmandes', 'Martine Rancé', '184, chaussée de Tournai', 'Lille', '59000', 'France'),
(24, 'Folk och fä HB', 'Maria Larsson', 'Åkergatan 24', 'Bräcke', 'S-844 67', 'Sweden'),
(25, 'Frankenversand', 'Peter Franken', 'Berliner Platz 43', 'München', '80805', 'Germany'),
(26, 'France restauration', 'Carine Schmitt', '54, rue Royale', 'Nantes', '44000', 'France'),
(27, 'Franchi S.p.A.', 'Paolo Accorti', 'Via Monte Bianco 34', 'Torino', '10100', 'Italy'),
(28, 'Furia Bacalhau e Frutos do Mar', 'Lino Rodriguez', 'Jardim das rosas n. 32', 'Lisboa', '1675', 'Portugal'),
(29, 'Galería del gastrónomo', 'Eduardo Saavedra', 'Rambla de Cataluña, 23', 'Barcelona', '08022', 'Spain'),
(30, 'Godos Cocina Típica', 'José Pedro Freyre', 'C/ Romero, 33', 'Sevilla', '41101', 'Spain'),
(31, 'Gourmet Lanchonetes', 'André Fonseca', 'Av. Brasil, 442', 'Campinas', '04876-786', 'Brazil'),
(32, 'Great Lakes Food Market', 'Howard Snyder', '2732 Baker Blvd.', 'Eugene', '97403', 'USA'),
(33, 'GROSELLA-Restaurante', 'Manuel Pereira', '5ª Ave. Los Palos Grandes', 'Caracas', '1081', 'Venezuela'),
(34, 'Hanari Carnes', 'Mario Pontes', 'Rua do Paço, 67', 'Rio de Janeiro', '05454-876', 'Brazil'),
(35, 'HILARIÓN-Abastos', 'Carlos Hernández', 'Carrera 22 con Ave. Carlos Soublette #8-35', 'San Cristóbal', '5022', 'Venezuela'),
(36, 'Hungry Coyote Import Store', 'Yoshi Latimer', 'City Center Plaza 516 Main St.', 'Elgin', '97827', 'USA'),
(37, 'Hungry Owl All-Night Grocers', 'Patricia McKenna', '8 Johnstown Road', 'Cork', '', 'Ireland'),
(38, 'Island Trading', 'Helen Bennett', 'Garden House Crowther Way', 'Cowes', 'PO31 7PJ', 'UK'),
(39, 'Königlich Essen', 'Philip Cramer', 'Maubelstr. 90', 'Brandenburg', '14776', 'Germany'),
(40, 'La corne abondance', 'Daniel Tonini', '67, avenue de Europe', 'Versailles', '78000', 'France'),
(41, 'La maison Asie', 'Annette Roulet', '1 rue Alsace-Lorraine', 'Toulouse', '31000', 'France'),
(42, 'Laughing Bacchus Wine Cellars', 'Yoshi Tannamuri', '1900 Oak St.', 'Vancouver', 'V3F 2K1', 'Canada'),
(43, 'Lazy K Kountry Store', 'John Steel', '12 Orchestra Terrace', 'Walla Walla', '99362', 'USA'),
(44, 'Lehmanns Marktstand', 'Renate Messner', 'Magazinweg 7', 'Frankfurt a.M.', '60528', 'Germany'),
(45, 'Lets Stop N Shop', 'Jaime Yorres', '87 Polk St. Suite 5', 'San Francisco', '94117', 'USA'),
(46, 'LILA-Supermercado', 'Carlos González', 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', 'Barquisimeto', '3508', 'Venezuela'),
(47, 'LINO-Delicateses', 'Felipe Izquierdo', 'Ave. 5 de Mayo Porlamar', 'I. de Margarita', '4980', 'Venezuela'),
(48, 'Lonesome Pine Restaurant', 'Fran Wilson', '89 Chiaroscuro Rd.', 'Portland', '97219', 'USA'),
(49, 'Magazzini Alimentari Riuniti', 'Giovanni Rovelli', 'Via Ludovico il Moro 22', 'Bergamo', '24100', 'Italy'),
(50, 'Maison Dewey', 'Catherine Dewey', 'Rue Joseph-Bens 532', 'Bruxelles', 'B-1180', 'Belgium'),
(51, 'Mère Paillarde', 'Jean Fresnière', '43 rue St. Laurent', 'Montréal', 'H1J 1C3', 'Canada'),
(52, 'Morgenstern Gesundkost', 'Alexander Feuer', 'Heerstr. 22', 'Leipzig', '04179', 'Germany'),
(53, 'North/South', 'Simon Crowther', 'South House 300 Queensbridge', 'London', 'SW7 1RZ', 'UK'),
(54, 'Océano Atlántico Ltda.', 'Yvonne Moncada', 'Ing. Gustavo Moncada 8585 Piso 20-A', 'Buenos Aires', '1010', 'Argentina'),
(55, 'Old World Delicatessen', 'Rene Phillips', '2743 Bering St.', 'Anchorage', '99508', 'USA'),
(56, 'Ottilies Käseladen', 'Henriette Pfalzheim', 'Mehrheimerstr. 369', 'Köln', '50739', 'Germany'),
(57, 'Paris spécialités', 'Marie Bertrand', '265, boulevard Charonne', 'Paris', '75012', 'France'),
(58, 'Pericles Comidas clásicas', 'Guillermo Fernández', 'Calle Dr. Jorge Cash 321', 'México D.F.', '05033', 'Mexico'),
(59, 'Piccolo und mehr', 'Georg Pipps', 'Geislweg 14', 'Salzburg', '5020', 'Austria'),
(60, 'Princesa Isabel Vinhoss', 'Isabel de Castro', 'Estrada da saúde n. 58', 'Lisboa', '1756', 'Portugal'),
(61, 'Que Delícia', 'Bernardo Batista', 'Rua da Panificadora, 12', 'Rio de Janeiro', '02389-673', 'Brazil'),
(62, 'Queen Cozinha', 'Lúcia Carvalho', 'Alameda dos Canàrios, 891', 'São Paulo', '05487-020', 'Brazil'),
(63, 'QUICK-Stop', 'Horst Kloss', 'Taucherstraße 10', 'Cunewalde', '01307', 'Germany'),
(64, 'Rancho grande', 'Sergio Gutiérrez', 'Av. del Libertador 900', 'Buenos Aires', '1010', 'Argentina'),
(65, 'Rattlesnake Canyon Grocery', 'Paula Wilson', '2817 Milton Dr.', 'Albuquerque', '87110', 'USA'),
(66, 'Reggiani Caseifici', 'Maurizio Moroni', 'Strada Provinciale 124', 'Reggio Emilia', '42100', 'Italy'),
(67, 'Ricardo Adocicados', 'Janete Limeira', 'Av. Copacabana, 267', 'Rio de Janeiro', '02389-890', 'Brazil'),
(68, 'Richter Supermarkt', 'Michael Holz', 'Grenzacherweg 237', 'Genève', '1203', 'Switzerland'),
(69, 'Romero y tomillo', 'Alejandra Camino', 'Gran Vía, 1', 'Madrid', '28001', 'Spain'),
(70, 'Santé Gourmet', 'Jonas Bergulfsen', 'Erling Skakkes gate 78', 'Stavern', '4110', 'Norway'),
(71, 'Save-a-lot Markets', 'Jose Pavarotti', '187 Suffolk Ln.', 'Boise', '83720', 'USA'),
(72, 'Seven Seas Imports', 'Hari Kumar', '90 Wadhurst Rd.', 'London', 'OX15 4NB', 'UK'),
(73, 'Simons bistro', 'Jytte Petersen', 'Vinbæltet 34', 'København', '1734', 'Denmark'),
(74, 'Spécialités du monde', 'Dominique Perrier', '25, rue Lauriston', 'Paris', '75016', 'France'),
(75, 'Split Rail Beer & Ale', 'Art Braunschweiger', 'P.O. Box 555', 'Lander', '82520', 'USA'),
(76, 'Suprêmes délices', 'Pascale Cartrain', 'Boulevard Tirou, 255', 'Charleroi', 'B-6000', 'Belgium'),
(77, 'The Big Cheese', 'Liz Nixon', '89 Jefferson Way Suite 2', 'Portland', '97201', 'USA'),
(78, 'The Cracker Box', 'Liu Wong', '55 Grizzly Peak Rd.', 'Butte', '59801', 'USA'),
(79, 'Toms Spezialitäten', 'Karin Josephs', 'Luisenstr. 48', 'Münster', '44087', 'Germany'),
(80, 'Tortuga Restaurante', 'Miguel Angel Paolino', 'Avda. Azteca 123', 'México D.F.', '05033', 'Mexico'),
(81, 'Tradição Hipermercados', 'Anabela Domingues', 'Av. Inês de Castro, 414', 'São Paulo', '05634-030', 'Brazil'),
(82, 'Trails Head Gourmet Provisioners', 'Helvetius Nagy', '722 DaVinci Blvd.', 'Kirkland', '98034', 'USA'),
(83, 'Vaffeljernet', 'Palle Ibsen', 'Smagsløget 45', 'Århus', '8200', 'Denmark'),
(84, 'Victuailles en stock', 'Mary Saveley', '2, rue du Commerce', 'Lyon', '69004', 'France'),
(85, 'Vins et alcools Chevalier', 'Paul Henriot', '59 rue de Abbaye', 'Reims', '51100', 'France'),
(86, 'Die Wandernde Kuh', 'Rita Müller', 'Adenauerallee 900', 'Stuttgart', '70563', 'Germany'),
(87, 'Wartian Herkku', 'Pirkko Koskitalo', 'Torikatu 38', 'Oulu', '90110', 'Finland'),
(88, 'Wellington Importadora', 'Paula Parente', 'Rua do Mercado, 12', 'Resende', '08737-363', 'Brazil'),
(89, 'White Clover Markets', 'Karl Jablonski', '305 - 14th Ave. S. Suite 3B', 'Seattle', '98128', 'USA'),
(90, 'Wilman Kala', 'Matti Karttunen', 'Keskuskatu 45', 'Helsinki', '21240', 'Finland'),
(91, 'Wolski', 'Zbyszek', 'ul. Filtrowa 68', 'Walla', '01-012', 'Poland');

INSERT INTO employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes) 
VALUES
(1, 'Davolio', 'Nancy', '1968-12-08', 'EmpID1.pic', 'Education includes a BA in psychology from Colorado State University. She also completed (The Art of the Cold Call). Nancy is a member of Toastmasters International.'),
(2, 'Fuller', 'Andrew', '1952-02-19', 'EmpID2.pic', 'Andrew received his BTS commercial and a Ph.D. in international marketing from the University of Dallas. He is fluent in French and Italian and reads German. He joined the company as a sales representative, was promoted to sales manager and was then named vice president of sales. Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.'),
(3, 'Leverling', 'Janet', '1963-08-30', 'EmpID3.pic', 'Janet has a BS degree in chemistry from Boston College). She has also completed a certificate program in food retailing management. Janet was hired as a sales associate and was promoted to sales representative.'),
(4, 'Peacock', 'Margaret', '1958-09-19', 'EmpID4.pic', 'Margaret holds a BA in English literature from Concordia College and an MA from the American Institute of Culinary Arts. She was temporarily assigned to the London office before returning to her permanent post in Seattle.'),
(5, 'Buchanan', 'Steven', '1955-03-04', 'EmpID5.pic', 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree. Upon joining the company as a sales representative, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London, where he was promoted to sales manager. Mr. Buchanan has completed the courses Successful Telemarketing and International Sales Management. He is fluent in French.'),
(6, 'Suyama', 'Michael', '1963-07-02', 'EmpID6.pic', 'Michael is a graduate of Sussex University (MA, economics) and the University of California at Los Angeles (MBA, marketing). He has also taken the courses Multi-Cultural Selling and Time Management for the Sales Professional. He is fluent in Japanese and can read and write French, Portuguese, and Spanish.'),
(7, 'King', 'Robert', '1960-05-29', 'EmpID7.pic', 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan and then joining the company. After completing a course entitled Selling in Europe, he was transferred to the London office.'),
(8, 'Callahan', 'Laura', '1958-01-09', 'EmpID8.pic', 'Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.'),
(9, 'Dodsworth', 'Anne', '1969-07-02', 'EmpID9.pic', 'Anne has a BA degree in English from St. Lawrence College. She is fluent in French and German.'),
(10, 'West', 'Adam', '1928-09-19', 'EmpID10.pic', 'An old chum.');

INSERT INTO orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID) 
VALUES
(10248, 90, 5, '1996-07-04', 3),
(10249, 81, 6, '1996-07-05', 1),
(10250, 34, 4, '1996-07-08', 2),
(10251, 84, 3, '1996-07-08', 1),
(10252, 76, 4, '1996-07-09', 2),
(10253, 34, 3, '1996-07-10', 2),
(10254, 14, 5, '1996-07-11', 2),
(10255, 68, 9, '1996-07-12', 3),
(10256, 88, 3, '1996-07-15', 2),
(10257, 35, 4, '1996-07-16', 3),
(10258, 20, 1, '1996-07-17', 1),
(10259, 13, 4, '1996-07-18', 3),
(10260, 55, 4, '1996-07-19', 1),
(10261, 61, 4, '1996-07-19', 2),
(10262, 65, 8, '1996-07-22', 3),
(10263, 20, 9, '1996-07-23', 3),
(10264, 24, 6, '1996-07-24', 3),
(10265, 7, 2, '1996-07-25', 1),
(10266, 87, 3, '1996-07-26', 3),
(10267, 25, 4, '1996-07-29', 1),
(10268, 33, 8, '1996-07-30', 3),
(10269, 89, 5, '1996-07-31', 1),
(10270, 87, 1, '1996-08-01', 1),
(10271, 75, 6, '1996-08-01', 2),
(10272, 65, 6, '1996-08-02', 2),
(10273, 63, 3, '1996-08-05', 3),
(10274, 85, 6, '1996-08-06', 1),
(10275, 49, 1, '1996-08-07', 1),
(10276, 80, 8, '1996-08-08', 3),
(10277, 52, 2, '1996-08-09', 3),
(10278, 5, 8, '1996-08-12', 2),
(10279, 44, 8, '1996-08-13', 2),
(10280, 5, 2, '1996-08-14', 1),
(10281, 69, 4, '1996-08-14', 1),
(10282, 69, 4, '1996-08-15', 1),
(10283, 46, 3, '1996-08-16', 3),
(10284, 44, 4, '1996-08-19', 1),
(10285, 63, 1, '1996-08-20', 2),
(10286, 63, 8, '1996-08-21', 3),
(10287, 67, 8, '1996-08-22', 3),
(10288, 66, 4, '1996-08-23', 1),
(10289, 11, 7, '1996-08-26', 3),
(10290, 15, 8, '1996-08-27', 1),
(10291, 61, 6, '1996-08-27', 2),
(10292, 81, 1, '1996-08-28', 2),
(10293, 80, 1, '1996-08-29', 3),
(10294, 65, 4, '1996-08-30', 2),
(10295, 85, 2, '1996-09-02', 2),
(10296, 46, 6, '1996-09-03', 1),
(10297, 7, 5, '1996-09-04', 2),
(10298, 37, 6, '1996-09-05', 2),
(10299, 67, 4, '1996-09-06', 2),
(10300, 49, 2, '1996-09-09', 2),
(10301, 86, 8, '1996-09-09', 2),
(10302, 76, 4, '1996-09-10', 2),
(10303, 30, 7, '1996-09-11', 2),
(10304, 80, 1, '1996-09-12', 2),
(10305, 55, 8, '1996-09-13', 3),
(10306, 69, 1, '1996-09-16', 3),
(10307, 48, 2, '1996-09-17', 2),
(10308, 2, 7, '1996-09-18', 3),
(10309, 37, 3, '1996-09-19', 1),
(10310, 77, 8, '1996-09-20', 2),
(10311, 18, 1, '1996-09-20', 3),
(10312, 86, 2, '1996-09-23', 2),
(10313, 63, 2, '1996-09-24', 2),
(10314, 65, 1, '1996-09-25', 2),
(10315, 38, 4, '1996-09-26', 2),
(10316, 65, 1, '1996-09-27', 3),
(10317, 48, 6, '1996-09-30', 1),
(10318, 38, 8, '1996-10-01', 2),
(10319, 80, 7, '1996-10-02', 3),
(10320, 87, 5, '1996-10-03', 3),
(10321, 38, 3, '1996-10-03', 2),
(10322, 58, 7, '1996-10-04', 3),
(10323, 39, 4, '1996-10-07', 1),
(10324, 71, 9, '1996-10-08', 1),
(10325, 39, 1, '1996-10-09', 3),
(10326, 8, 4, '1996-10-10', 2),
(10327, 24, 2, '1996-10-11', 1),
(10328, 28, 4, '1996-10-14', 3),
(10329, 75, 4, '1996-10-15', 2),
(10330, 46, 3, '1996-10-16', 1),
(10331, 9, 9, '1996-10-16', 1),
(10332, 51, 3, '1996-10-17', 2),
(10333, 87, 5, '1996-10-18', 3),
(10334, 84, 8, '1996-10-21', 2),
(10335, 37, 7, '1996-10-22', 2),
(10336, 60, 7, '1996-10-23', 2),
(10337, 25, 4, '1996-10-24', 3),
(10338, 55, 4, '1996-10-25', 3),
(10339, 51, 2, '1996-10-28', 2),
(10340, 9, 1, '1996-10-29', 3),
(10341, 73, 7, '1996-10-29', 3),
(10342, 25, 4, '1996-10-30', 2),
(10343, 44, 4, '1996-10-31', 1),
(10344, 89, 4, '1996-11-01', 2),
(10345, 63, 2, '1996-11-04', 2),
(10346, 65, 3, '1996-11-05', 3),
(10347, 21, 4, '1996-11-06', 3),
(10348, 86, 4, '1996-11-07', 2),
(10349, 75, 7, '1996-11-08', 1),
(10350, 41, 6, '1996-11-11', 2),
(10351, 20, 1, '1996-11-11', 1),
(10352, 28, 3, '1996-11-12', 3),
(10353, 59, 7, '1996-11-13', 3),
(10354, 58, 8, '1996-11-14', 3),
(10355, 4, 6, '1996-11-15', 1),
(10356, 86, 6, '1996-11-18', 2),
(10357, 46, 1, '1996-11-19', 3),
(10358, 41, 5, '1996-11-20', 1),
(10359, 72, 5, '1996-11-21', 3),
(10360, 7, 4, '1996-11-22', 3),
(10361, 63, 1, '1996-11-22', 2),
(10362, 9, 3, '1996-11-25', 1),
(10363, 17, 4, '1996-11-26', 3),
(10364, 19, 1, '1996-11-26', 1),
(10365, 3, 3, '1996-11-27', 2),
(10366, 29, 8, '1996-11-28', 2),
(10367, 83, 7, '1996-11-28', 3),
(10368, 20, 2, '1996-11-29', 2),
(10369, 75, 8, '1996-12-02', 2),
(10370, 14, 6, '1996-12-03', 2),
(10371, 41, 1, '1996-12-03', 1),
(10372, 62, 5, '1996-12-04', 2),
(10373, 37, 4, '1996-12-05', 3),
(10374, 91, 1, '1996-12-05', 3),
(10375, 36, 3, '1996-12-06', 2),
(10376, 51, 1, '1996-12-09', 2),
(10377, 72, 1, '1996-12-09', 3),
(10378, 24, 5, '1996-12-10', 3),
(10379, 61, 2, '1996-12-11', 1),
(10380, 37, 8, '1996-12-12', 3),
(10381, 46, 3, '1996-12-12', 3),
(10382, 20, 4, '1996-12-13', 1),
(10383, 4, 8, '1996-12-16', 3),
(10384, 5, 3, '1996-12-16', 3),
(10385, 75, 1, '1996-12-17', 2),
(10386, 21, 9, '1996-12-18', 3),
(10387, 70, 1, '1996-12-18', 2),
(10388, 72, 2, '1996-12-19', 1),
(10389, 10, 4, '1996-12-20', 2),
(10390, 20, 6, '1996-12-23', 1),
(10391, 17, 3, '1996-12-23', 3),
(10392, 59, 2, '1996-12-24', 3),
(10393, 71, 1, '1996-12-25', 3),
(10394, 36, 1, '1996-12-25', 3),
(10395, 35, 6, '1996-12-26', 1),
(10396, 25, 1, '1996-12-27', 3),
(10397, 60, 5, '1996-12-27', 1),
(10398, 71, 2, '1996-12-30', 3),
(10399, 83, 8, '1996-12-31', 3),
(10400, 19, 1, '1997-01-01', 3),
(10401, 65, 1, '1997-01-01', 1),
(10402, 20, 8, '1997-01-02', 2),
(10403, 20, 4, '1997-01-03', 3),
(10404, 49, 2, '1997-01-03', 1),
(10405, 47, 1, '1997-01-06', 1),
(10406, 62, 7, '1997-01-07', 1),
(10407, 56, 2, '1997-01-07', 2),
(10408, 23, 8, '1997-01-08', 1),
(10409, 54, 3, '1997-01-09', 1),
(10410, 10, 3, '1997-01-10', 3),
(10411, 10, 9, '1997-01-10', 3),
(10412, 87, 8, '1997-01-13', 2),
(10413, 41, 3, '1997-01-14', 2),
(10414, 21, 2, '1997-01-14', 3),
(10415, 36, 3, '1997-01-15', 1),
(10416, 87, 8, '1997-01-16', 3),
(10417, 73, 4, '1997-01-16', 3),
(10418, 63, 4, '1997-01-17', 1),
(10419, 68, 4, '1997-01-20', 2),
(10420, 88, 3, '1997-01-21', 1),
(10421, 61, 8, '1997-01-21', 1),
(10422, 27, 2, '1997-01-22', 1),
(10423, 31, 6, '1997-01-23', 3),
(10424, 51, 7, '1997-01-23', 2),
(10425, 41, 6, '1997-01-24', 2),
(10426, 29, 4, '1997-01-27', 1),
(10427, 59, 4, '1997-01-27', 2),
(10428, 66, 7, '1997-01-28', 1),
(10429, 37, 3, '1997-01-29', 2),
(10430, 20, 4, '1997-01-30', 1),
(10431, 10, 4, '1997-01-30', 2),
(10432, 75, 3, '1997-01-31', 2),
(10433, 60, 3, '1997-02-03', 3),
(10434, 24, 3, '1997-02-03', 2),
(10435, 16, 8, '1997-02-04', 2),
(10436, 7, 3, '1997-02-05', 2),
(10437, 87, 8, '1997-02-05', 1),
(10438, 79, 3, '1997-02-06', 2),
(10439, 51, 6, '1997-02-07', 3),
(10440, 71, 4, '1997-02-10', 2),
(10441, 55, 3, '1997-02-10', 2),
(10442, 20, 3, '1997-02-11', 2),
(10443, 66, 8, '1997-02-12', 1);

INSERT INTO suppliers (SupplierID, SupplierName, ContactName, Address, City, PostalCode, Country, Phone) 
VALUES
(1, 'Exotic Liquid', 'Charlotte Cooper', '49 Gilbert St.', 'Londona', 'EC1 4SD', 'UK', '(171) 555-2222'),
(2, 'New Orleans Cajun Delights', 'Shelley Burke', 'P.O. Box 78934', 'New Orleans', '70117', 'USA', '(100) 555-4822'),
(3, 'Grandma Kellys Homestead', 'Regina Murphy', '707 Oxford Rd.', 'Ann Arbor', '48104', 'USA', '(313) 555-5735'),
(4, 'Tokyo Traders', 'Yoshi Nagase', '9-8 Sekimai Musashino-shi', 'Tokyo', '100', 'Japan', '(03) 3555-5011'),
(5, 'Cooperativa de Quesos Las Cabras', 'Antonio del Valle Saavedra', 'Calle del Rosal 4', 'Oviedo', '33007', 'Spain', '(98) 598 76 54'),
(6, 'Mayumis', 'Mayumi Ohno', '92 Setsuko Chuo-ku', 'Osaka', '545', 'Japan', '(06) 431-7877'),
(7, 'Pavlova, Ltd.', 'Ian Devling', '74 Rose St. Moonie Ponds', 'Melbourne', '3058', 'Australia', '(03) 444-2343'),
(8, 'Specialty Biscuits, Ltd.', 'Peter Wilson', '29 Kings Way', 'Manchester', 'M14 GSD', 'UK', '(161) 555-4448'),
(9, 'PB Knäckebröd AB', 'Lars Peterson', 'Kaloadagatan 13', 'Göteborg', 'S-345 67', 'Sweden', '031-987 65 43'),
(10, 'Refrescos Americanas LTDA', 'Carlos Diaz', 'Av. das Americanas 12.890', 'São Paulo', '5442', 'Brazil', '(11) 555 4640'),
(11, 'Heli Süßwaren GmbH & Co. KG', 'Petra Winkler', 'Tiergartenstraße 5', 'Berlin', '10785', 'Germany', '(010) 9984510'),
(12, 'Plutzer Lebensmittelgroßmärkte AG', 'Martin Bein', 'Bogenallee 51', 'Frankfurt', '60439', 'Germany', '(069) 992755'),
(13, 'Nord-Ost-Fisch Handelsgesellschaft mbH', 'Sven Petersen', 'Frahmredder 112a', 'Cuxhaven', '27478', 'Germany', '(04721) 8713'),
(14, 'Formaggi Fortini s.r.l.', 'Elio Rossi', 'Viale Dante, 75', 'Ravenna', '48100', 'Italy', '(0544) 60323'),
(15, 'Norske Meierier', 'Beate Vileid', 'Hatlevegen 5', 'Sandvika', '1320', 'Norway', '(0)2-953010'),
(16, 'Bigfoot Breweries', 'Cheryl Saylor', '3400 - 8th Avenue Suite 210', 'Bend', '97101', 'USA', '(503) 555-9931'),
(17, 'Svensk Sjöföda AB', 'Michael Björn', 'Brovallavägen 231', 'Stockholm', 'S-123 45', 'Sweden', '08-123 45 67'),
(18, 'Aux joyeux ecclésiastiques', 'Guylène Nodier', '203, Rue des Francs-Bourgeois', 'Paris', '75004', 'France', '(1) 03.83.00.68'),
(19, 'New England Seafood Cannery', 'Robb Merchant', 'Order Processing Dept. 2100 Paul Revere Blvd.', 'Boston', '02134', 'USA', '(617) 555-3267'),
(20, 'Leka Trading', 'Chandra Leka', '471 Serangoon Loop, Suite #402', 'Singapore', '0512', 'Singapore', '555-8787'),
(21, 'Lyngbysild', 'Niels Petersen', 'Lyngbysild Fiskebakken 10', 'Lyngby', '2800', 'Denmark', '43844108'),
(22, 'Zaanse Snoepfabriek', 'Dirk Luchte', 'Verkoop Rijnweg 22', 'Zaandam', '9999 ZZ', 'Netherlands', '(12345) 1212'),
(23, 'Karkki Oy', 'Anne Heikkonen', 'Valtakatu 12', 'Lappeenranta', '53120', 'Finland', '(953) 10956'),
(24, 'Gday, Mate', 'Wendy Mackenzie', '170 Prince Edward Parade Hunters Hill', 'Sydney', '2042', 'Australia', '(02) 555-5914'),
(25, 'Ma Maison', 'Jean-Guy Lauzon', '2960 Rue St. Laurent', 'Montréal', 'H1J 1C3', 'Canada', '(514) 555-9022'),
(26, 'Pasta Buttini s.r.l.', 'Giovanni Giudici', 'Via dei Gelsomini, 153', 'Salerno', '84100', 'Italy', '(089) 6547665'),
(27, 'Escargots Nouveaux', 'Marie Delamare', '22, rue H. Voiron', 'Montceau', '71300', 'France', '85.57.00.07'),
(28, 'Gai pâturage', 'Eliane Noz', 'Bat. B 3, rue des Alpes', 'Annecy', '74000', 'France', '38.76.98.06'),
(29, 'Forêts érables', 'Chantal Goulet', '148 rue Chasseur', 'Ste-Hyacinthe', 'J2S 7S8', 'Canada', '(514) 555-2955');

INSERT INTO products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price) 
VALUES
(1, 'Chais', 1, 1, '10 boxes x 20 bags', 18),
(2, 'Chang', 1, 1, '24 - 12 oz bottles', 19),
(3, 'Aniseed Syrup', 1, 2, '12 - 550 ml bottles', 10),
(4, 'Chef Antons Cajun Seasoning', 2, 2, '48 - 6 oz jars', 22),
(5, 'Chef Antons Gumbo Mix', 2, 2, '36 boxes', 21.35),
(6, 'Grandmas Boysenberry Spread', 3, 2, '12 - 8 oz jars', 25),
(7, 'Uncle Bobs Organic Dried Pears', 3, 7, '12 - 1 lb pkgs.', 30),
(8, 'Northwoods Cranberry Sauce', 3, 2, '12 - 12 oz jars', 40),
(9, 'Mishi Kobe Niku', 4, 6, '18 - 500 g pkgs.', 97),
(10, 'Ikura', 4, 8, '12 - 200 ml jars', 31),
(11, 'Queso Cabrales', 5, 4, '1 kg pkg.', 21),
(12, 'Queso Manchego La Pastora', 5, 4, '10 - 500 g pkgs.', 38),
(13, 'Konbu', 6, 8, '2 kg box', 6),
(14, 'Tofu', 6, 7, '40 - 100 g pkgs.', 23.25),
(15, 'Genen Shouyu', 6, 2, '24 - 250 ml bottles', 15.5),
(16, 'Pavlova', 7, 3, '32 - 500 g boxes', 17.45),
(17, 'Alice Mutton', 7, 6, '20 - 1 kg tins', 39),
(18, 'Carnarvon Tigers', 7, 8, '16 kg pkg.', 62.5),
(19, 'Teatime Chocolate Biscuits', 8, 3, '10 boxes x 12 pieces', 9.2),
(20, 'Sir Rodneys Marmalade', 8, 3, '30 gift boxes', 81),
(21, 'Sir Rodneys Scones', 8, 3, '24 pkgs. x 4 pieces', 10),
(22, 'Gustafs Knäckebröd', 9, 5, '24 - 500 g pkgs.', 21),
(23, 'Tunnbröd', 9, 5, '12 - 250 g pkgs.', 9),
(24, 'Guaraná Fantástica', 10, 1, '12 - 355 ml cans', 4.5),
(25, 'NuNuCa Nuß-Nougat-Creme', 11, 3, '20 - 450 g glasses', 14),
(26, 'Gumbär Gummibärchen', 11, 3, '100 - 250 g bags', 31.23),
(27, 'Schoggi Schokolade', 11, 3, '100 - 100 g pieces', 43.9),
(28, 'Rössle Sauerkraut', 12, 7, '25 - 825 g cans', 45.6),
(29, 'Thüringer Rostbratwurst', 12, 6, '50 bags x 30 sausgs.', 123.79),
(30, 'Nord-Ost Matjeshering', 13, 8, '10 - 200 g glasses', 25.89),
(31, 'Gorgonzola Telino', 14, 4, '12 - 100 g pkgs', 12.5),
(32, 'Mascarpone Fabioli', 14, 4, '24 - 200 g pkgs.', 32),
(33, 'Geitost', 15, 4, '500 g', 2.5),
(34, 'Sasquatch Ale', 16, 1, '24 - 12 oz bottles', 14),
(35, 'Steeleye Stout', 16, 1, '24 - 12 oz bottles', 18),
(36, 'Inlagd Sill', 17, 8, '24 - 250 g jars', 19),
(37, 'Gravad lax', 17, 8, '12 - 500 g pkgs.', 26),
(38, 'Côte de Blaye', 18, 1, '12 - 75 cl bottles', 263.5),
(39, 'Chartreuse verte', 18, 1, '750 cc per bottle', 18),
(40, 'Boston Crab Meat', 19, 8, '24 - 4 oz tins', 18.4),
(41, 'Jacks New England Clam Chowder', 19, 8, '12 - 12 oz cans', 9.65),
(42, 'Singaporean Hokkien Fried Mee', 20, 5, '32 - 1 kg pkgs.', 14),
(43, 'Ipoh Coffee', 20, 1, '16 - 500 g tins', 46),
(44, 'Gula Malacca', 20, 2, '20 - 2 kg bags', 19.45),
(45, 'Røgede sild', 21, 8, '1k pkg.', 9.5),
(46, 'Spegesild', 21, 8, '4 - 450 g glasses', 12),
(47, 'Zaanse koeken', 22, 3, '10 - 4 oz boxes', 9.5),
(48, 'Chocolade', 22, 3, '10 pkgs.', 12.75),
(49, 'Maxilaku', 23, 3, '24 - 50 g pkgs.', 20),
(50, 'Valkoinen suklaa', 23, 3, '12 - 100 g bars', 16.25),
(51, 'Manjimup Dried Apples', 24, 7, '50 - 300 g pkgs.', 53),
(52, 'Filo Mix', 24, 5, '16 - 2 kg boxes', 7),
(53, 'Perth Pasties', 24, 6, '48 pieces', 32.8),
(54, 'Tourtière', 25, 6, '16 pies', 7.45),
(55, 'Pâté chinois', 25, 6, '24 boxes x 2 pies', 24),
(56, 'Gnocchi di nonna Alice', 26, 5, '24 - 250 g pkgs.', 38),
(57, 'Ravioli Angelo', 26, 5, '24 - 250 g pkgs.', 19.5),
(58, 'Escargots de Bourgogne', 27, 8, '24 pieces', 13.25),
(59, 'Raclette Courdavault', 28, 4, '5 kg pkg.', 55),
(60, 'Camembert Pierrot', 28, 4, '15 - 300 g rounds', 34),
(61, 'Sirop érable', 29, 2, '24 - 500 ml bottles', 28.5),
(62, 'Tarte au sucre', 29, 3, '48 pies', 49.3),
(63, 'Vegie-spread', 7, 2, '15 - 625 g jars', 43.9),
(64, 'Wimmers gute Semmelknödel', 12, 5, '20 bags x 4 pieces', 33.25),
(65, 'Louisiana Fiery Hot Pepper Sauce', 2, 2, '32 - 8 oz bottles', 21.05),
(66, 'Louisiana Hot Spiced Okra', 2, 2, '24 - 8 oz jars', 17),
(67, 'Laughing Lumberjack Lager', 16, 1, '24 - 12 oz bottles', 14),
(68, 'Scottish Longbreads', 8, 3, '10 boxes x 8 pieces', 12.5),
(69, 'Gudbrandsdalsost', 15, 4, '10 kg pkg.', 36),
(70, 'Outback Lager', 7, 1, '24 - 355 ml bottles', 15),
(71, 'Fløtemysost', 15, 4, '10 - 500 g pkgs.', 21.5),
(72, 'Mozzarella di Giovanni', 14, 4, '24 - 200 g pkgs.', 34.8),
(73, 'Röd Kaviar', 17, 8, '24 - 150 g jars', 15),
(74, 'Longlife Tofu', 4, 7, '5 kg pkg.', 10),
(75, 'Rhönbräu Klosterbier', 12, 1, '24 - 0.5 l bottles', 7.75),
(76, 'Lakkalikööri', 23, 1, '500 ml', 18),
(77, 'Original Frankfurter grüne Soße', 12, 2, '12 boxes', 13);

INSERT INTO order_details (OrderDetailID, OrderID, ProductID, Quantity) 
VALUES
(1, 10248, 11, 12),
(2, 10248, 42, 10),
(3, 10248, 72, 5),
(4, 10249, 14, 9),
(5, 10249, 51, 40),
(6, 10250, 41, 10),
(7, 10250, 51, 35),
(8, 10250, 65, 15),
(9, 10251, 22, 6),
(10, 10251, 57, 15),
(11, 10251, 65, 20),
(12, 10252, 20, 40),
(13, 10252, 33, 25),
(14, 10252, 60, 40),
(15, 10253, 31, 20),
(16, 10253, 39, 42),
(17, 10253, 49, 40),
(18, 10254, 24, 15),
(19, 10254, 55, 21),
(20, 10254, 74, 21),
(21, 10255, 2, 20),
(22, 10255, 16, 35),
(23, 10255, 36, 25),
(24, 10255, 59, 30),
(25, 10256, 53, 15),
(26, 10256, 77, 12),
(27, 10257, 27, 25),
(28, 10257, 39, 6),
(29, 10257, 77, 15),
(30, 10258, 2, 50),
(31, 10258, 5, 65),
(32, 10258, 32, 6),
(33, 10259, 21, 10),
(34, 10259, 37, 1),
(35, 10260, 41, 16),
(36, 10260, 57, 50),
(37, 10260, 62, 15),
(38, 10260, 70, 21),
(39, 10261, 21, 20),
(40, 10261, 35, 20),
(41, 10262, 5, 12),
(42, 10262, 7, 15),
(43, 10262, 56, 2),
(44, 10263, 16, 60),
(45, 10263, 24, 28),
(46, 10263, 30, 60),
(47, 10263, 74, 36),
(48, 10264, 2, 35),
(49, 10264, 41, 25),
(50, 10265, 17, 30),
(51, 10265, 70, 20),
(52, 10266, 12, 12),
(53, 10267, 40, 50),
(54, 10267, 59, 70),
(55, 10267, 76, 15),
(56, 10268, 29, 10),
(57, 10268, 72, 4),
(58, 10269, 33, 60),
(59, 10269, 72, 20),
(60, 10270, 36, 30),
(61, 10270, 43, 25),
(62, 10271, 33, 24),
(63, 10272, 20, 6),
(64, 10272, 31, 40),
(65, 10272, 72, 24),
(66, 10273, 10, 24),
(67, 10273, 31, 15),
(68, 10273, 33, 20),
(69, 10273, 40, 60),
(70, 10273, 76, 33),
(71, 10274, 71, 20),
(72, 10274, 72, 7),
(73, 10275, 24, 12),
(74, 10275, 59, 6),
(75, 10276, 10, 15),
(76, 10276, 13, 10),
(77, 10277, 28, 20),
(78, 10277, 62, 12),
(79, 10278, 44, 16),
(80, 10278, 59, 15),
(81, 10278, 63, 8),
(82, 10278, 73, 25),
(83, 10279, 17, 15),
(84, 10280, 24, 12),
(85, 10280, 55, 20),
(86, 10280, 75, 30),
(87, 10281, 19, 1),
(88, 10281, 24, 6),
(89, 10281, 35, 4),
(90, 10282, 30, 6),
(91, 10282, 57, 2),
(92, 10283, 15, 20),
(93, 10283, 19, 18),
(94, 10283, 60, 35),
(95, 10283, 72, 3),
(96, 10284, 27, 15),
(97, 10284, 44, 21),
(98, 10284, 60, 20),
(99, 10284, 67, 5),
(100, 10285, 1, 45),
(101, 10285, 40, 40),
(102, 10285, 53, 36),
(103, 10286, 35, 100),
(104, 10286, 62, 40),
(105, 10287, 16, 40),
(106, 10287, 34, 20),
(107, 10287, 46, 15),
(108, 10288, 54, 10),
(109, 10288, 68, 3),
(110, 10289, 3, 30),
(111, 10289, 64, 9),
(112, 10290, 5, 20),
(113, 10290, 29, 15),
(114, 10290, 49, 15),
(115, 10290, 77, 10),
(116, 10291, 13, 20),
(117, 10291, 44, 24),
(118, 10291, 51, 2),
(119, 10292, 20, 20),
(120, 10293, 18, 12),
(121, 10293, 24, 10),
(122, 10293, 63, 5),
(123, 10293, 75, 6),
(124, 10294, 1, 18),
(125, 10294, 17, 15),
(126, 10294, 43, 15),
(127, 10294, 60, 21),
(128, 10294, 75, 6),
(129, 10295, 56, 4),
(130, 10296, 11, 12),
(131, 10296, 16, 30),
(132, 10296, 69, 15),
(133, 10297, 39, 60),
(134, 10297, 72, 20),
(135, 10298, 2, 40),
(136, 10298, 36, 40),
(137, 10298, 59, 30),
(138, 10298, 62, 15),
(139, 10299, 19, 15),
(140, 10299, 70, 20),
(141, 10300, 66, 30),
(142, 10300, 68, 20),
(143, 10301, 40, 10),
(144, 10301, 56, 20),
(145, 10302, 17, 40),
(146, 10302, 28, 28),
(147, 10302, 43, 12),
(148, 10303, 40, 40),
(149, 10303, 65, 30),
(150, 10303, 68, 15),
(151, 10304, 49, 30),
(152, 10304, 59, 10),
(153, 10304, 71, 2),
(154, 10305, 18, 25),
(155, 10305, 29, 25),
(156, 10305, 39, 30),
(157, 10306, 30, 10),
(158, 10306, 53, 10),
(159, 10306, 54, 5),
(160, 10307, 62, 10),
(161, 10307, 68, 3),
(162, 10308, 69, 1),
(163, 10308, 70, 5),
(164, 10309, 4, 20),
(165, 10309, 6, 30),
(166, 10309, 42, 2),
(167, 10309, 43, 20),
(168, 10309, 71, 3),
(169, 10310, 16, 10),
(170, 10310, 62, 5),
(171, 10311, 42, 6),
(172, 10311, 69, 7),
(173, 10312, 28, 4),
(174, 10312, 43, 24),
(175, 10312, 53, 20),
(176, 10312, 75, 10),
(177, 10313, 36, 12),
(178, 10314, 32, 40),
(179, 10314, 58, 30),
(180, 10314, 62, 25),
(181, 10315, 34, 14),
(182, 10315, 70, 30),
(183, 10316, 41, 10),
(184, 10316, 62, 70),
(185, 10317, 1, 20),
(186, 10318, 41, 20),
(187, 10318, 76, 6),
(188, 10319, 17, 8),
(189, 10319, 28, 14),
(190, 10319, 76, 30),
(191, 10320, 71, 30),
(192, 10321, 35, 10),
(193, 10322, 52, 20),
(194, 10323, 15, 5),
(195, 10323, 25, 4),
(196, 10323, 39, 4),
(197, 10324, 16, 21),
(198, 10324, 35, 70),
(199, 10324, 46, 30),
(200, 10324, 59, 40),
(201, 10324, 63, 80),
(202, 10325, 6, 6),
(203, 10325, 13, 12),
(204, 10325, 14, 9),
(205, 10325, 31, 4),
(206, 10325, 72, 40),
(207, 10326, 4, 24),
(208, 10326, 57, 16),
(209, 10326, 75, 50),
(210, 10327, 2, 25),
(211, 10327, 11, 50),
(212, 10327, 30, 35),
(213, 10327, 58, 30),
(214, 10328, 59, 9),
(215, 10328, 65, 40),
(216, 10328, 68, 10),
(217, 10329, 19, 10),
(218, 10329, 30, 8),
(219, 10329, 38, 20),
(220, 10329, 56, 12),
(221, 10330, 26, 50),
(222, 10330, 72, 25),
(223, 10331, 54, 15),
(224, 10332, 18, 40),
(225, 10332, 42, 10),
(226, 10332, 47, 16),
(227, 10333, 14, 10),
(228, 10333, 21, 10),
(229, 10333, 71, 40),
(230, 10334, 52, 8),
(231, 10334, 68, 10),
(232, 10335, 2, 7),
(233, 10335, 31, 25),
(234, 10335, 32, 6),
(235, 10335, 51, 48),
(236, 10336, 4, 18),
(237, 10337, 23, 40),
(238, 10337, 26, 24),
(239, 10337, 36, 20),
(240, 10337, 37, 28),
(241, 10337, 72, 25),
(242, 10338, 17, 20),
(243, 10338, 30, 15),
(244, 10339, 4, 10),
(245, 10339, 17, 70),
(246, 10339, 62, 28),
(247, 10340, 18, 20),
(248, 10340, 41, 12),
(249, 10340, 43, 40),
(250, 10341, 33, 8),
(251, 10341, 59, 9),
(252, 10342, 2, 24),
(253, 10342, 31, 56),
(254, 10342, 36, 40),
(255, 10342, 55, 40),
(256, 10343, 64, 50),
(257, 10343, 68, 4),
(258, 10343, 76, 15),
(259, 10344, 4, 35),
(260, 10344, 8, 70),
(261, 10345, 8, 70),
(262, 10345, 19, 80),
(263, 10345, 42, 9),
(264, 10346, 17, 36),
(265, 10346, 56, 20),
(266, 10347, 25, 10),
(267, 10347, 39, 50),
(268, 10347, 40, 4),
(269, 10347, 75, 6),
(270, 10348, 1, 15),
(271, 10348, 23, 25),
(272, 10349, 54, 24),
(273, 10350, 50, 15),
(274, 10350, 69, 18),
(275, 10351, 38, 20),
(276, 10351, 41, 13),
(277, 10351, 44, 77),
(278, 10351, 65, 10),
(279, 10352, 24, 10),
(280, 10352, 54, 20),
(281, 10353, 11, 12),
(282, 10353, 38, 50),
(283, 10354, 1, 12),
(284, 10354, 29, 4),
(285, 10355, 24, 25),
(286, 10355, 57, 25),
(287, 10356, 31, 30),
(288, 10356, 55, 12),
(289, 10356, 69, 20),
(290, 10357, 10, 30),
(291, 10357, 26, 16),
(292, 10357, 60, 8),
(293, 10358, 24, 10),
(294, 10358, 34, 10),
(295, 10358, 36, 20),
(296, 10359, 16, 56),
(297, 10359, 31, 70),
(298, 10359, 60, 80),
(299, 10360, 28, 30),
(300, 10360, 29, 35),
(301, 10360, 38, 10),
(302, 10360, 49, 35),
(303, 10360, 54, 28),
(304, 10361, 39, 54),
(305, 10361, 60, 55),
(306, 10362, 25, 50),
(307, 10362, 51, 20),
(308, 10362, 54, 24),
(309, 10363, 31, 20),
(310, 10363, 75, 12),
(311, 10363, 76, 12),
(312, 10364, 69, 30),
(313, 10364, 71, 5),
(314, 10365, 11, 24),
(315, 10366, 65, 5),
(316, 10366, 77, 5),
(317, 10367, 34, 36),
(318, 10367, 54, 18),
(319, 10367, 65, 15),
(320, 10367, 77, 7),
(321, 10368, 21, 5),
(322, 10368, 28, 13),
(323, 10368, 57, 25),
(324, 10368, 64, 35),
(325, 10369, 29, 20),
(326, 10369, 56, 18),
(327, 10370, 1, 15),
(328, 10370, 64, 30),
(329, 10370, 74, 20),
(330, 10371, 36, 6),
(331, 10372, 20, 12),
(332, 10372, 38, 40),
(333, 10372, 60, 70),
(334, 10372, 72, 42),
(335, 10373, 58, 80),
(336, 10373, 71, 50),
(337, 10374, 31, 30),
(338, 10374, 58, 15),
(339, 10375, 14, 15),
(340, 10375, 54, 10),
(341, 10376, 31, 42),
(342, 10377, 28, 20),
(343, 10377, 39, 20),
(344, 10378, 71, 6),
(345, 10379, 41, 8),
(346, 10379, 63, 16),
(347, 10379, 65, 20),
(348, 10380, 30, 18),
(349, 10380, 53, 20),
(350, 10380, 60, 6),
(351, 10380, 70, 30),
(352, 10381, 74, 14),
(353, 10382, 5, 32),
(354, 10382, 18, 9),
(355, 10382, 29, 14),
(356, 10382, 33, 60),
(357, 10382, 74, 50),
(358, 10383, 13, 20),
(359, 10383, 50, 15),
(360, 10383, 56, 20),
(361, 10384, 20, 28),
(362, 10384, 60, 15),
(363, 10385, 7, 10),
(364, 10385, 60, 20),
(365, 10385, 68, 8),
(366, 10386, 24, 15),
(367, 10386, 34, 10),
(368, 10387, 24, 15),
(369, 10387, 28, 6),
(370, 10387, 59, 12),
(371, 10387, 71, 15),
(372, 10388, 45, 15),
(373, 10388, 52, 20),
(374, 10388, 53, 40),
(375, 10389, 10, 16),
(376, 10389, 55, 15),
(377, 10389, 62, 20),
(378, 10389, 70, 30),
(379, 10390, 31, 60),
(380, 10390, 35, 40),
(381, 10390, 46, 45),
(382, 10390, 72, 24),
(383, 10391, 13, 18),
(384, 10392, 69, 50),
(385, 10393, 2, 25),
(386, 10393, 14, 42),
(387, 10393, 25, 7),
(388, 10393, 26, 70),
(389, 10393, 31, 32),
(390, 10394, 13, 10),
(391, 10394, 62, 10),
(392, 10395, 46, 28),
(393, 10395, 53, 70),
(394, 10395, 69, 8),
(395, 10396, 23, 40),
(396, 10396, 71, 60),
(397, 10396, 72, 21),
(398, 10397, 21, 10),
(399, 10397, 51, 18),
(400, 10398, 35, 30),
(401, 10398, 55, 120),
(402, 10399, 68, 60),
(403, 10399, 71, 30),
(404, 10399, 76, 35),
(405, 10399, 77, 14),
(406, 10400, 29, 21),
(407, 10400, 35, 35),
(408, 10400, 49, 30),
(409, 10401, 30, 18),
(410, 10401, 56, 70),
(411, 10401, 65, 20),
(412, 10401, 71, 60),
(413, 10402, 23, 60),
(414, 10402, 63, 65),
(415, 10403, 16, 21),
(416, 10403, 48, 70),
(417, 10404, 26, 30),
(418, 10404, 42, 40),
(419, 10404, 49, 30),
(420, 10405, 3, 50),
(421, 10406, 1, 10),
(422, 10406, 21, 30),
(423, 10406, 28, 42),
(424, 10406, 36, 5),
(425, 10406, 40, 2),
(426, 10407, 11, 30),
(427, 10407, 69, 15),
(428, 10407, 71, 15),
(429, 10408, 37, 10),
(430, 10408, 54, 6),
(431, 10408, 62, 35),
(432, 10409, 14, 12),
(433, 10409, 21, 12),
(434, 10410, 33, 49),
(435, 10410, 59, 16),
(436, 10411, 41, 25),
(437, 10411, 44, 40),
(438, 10411, 59, 9),
(439, 10412, 14, 20),
(440, 10413, 1, 24),
(441, 10413, 62, 40),
(442, 10413, 76, 14),
(443, 10414, 19, 18),
(444, 10414, 33, 50),
(445, 10415, 17, 2),
(446, 10415, 33, 20),
(447, 10416, 19, 20),
(448, 10416, 53, 10),
(449, 10416, 57, 20),
(450, 10417, 38, 50),
(451, 10417, 46, 2),
(452, 10417, 68, 36),
(453, 10417, 77, 35),
(454, 10418, 2, 60),
(455, 10418, 47, 55),
(456, 10418, 61, 16),
(457, 10418, 74, 15),
(458, 10419, 60, 60),
(459, 10419, 69, 20),
(460, 10420, 9, 20),
(461, 10420, 13, 2),
(462, 10420, 70, 8),
(463, 10420, 73, 20),
(464, 10421, 19, 4),
(465, 10421, 26, 30),
(466, 10421, 53, 15),
(467, 10421, 77, 10),
(468, 10422, 26, 2),
(469, 10423, 31, 14),
(470, 10423, 59, 20),
(471, 10424, 35, 60),
(472, 10424, 38, 49),
(473, 10424, 68, 30),
(474, 10425, 55, 10),
(475, 10425, 76, 20),
(476, 10426, 56, 5),
(477, 10426, 64, 7),
(478, 10427, 14, 35),
(479, 10428, 46, 20),
(480, 10429, 50, 40),
(481, 10429, 63, 35),
(482, 10430, 17, 45),
(483, 10430, 21, 50),
(484, 10430, 56, 30),
(485, 10430, 59, 70),
(486, 10431, 17, 50),
(487, 10431, 40, 50),
(488, 10431, 47, 30),
(489, 10432, 26, 10),
(490, 10432, 54, 40),
(491, 10433, 56, 28),
(492, 10434, 11, 6),
(493, 10434, 76, 18),
(494, 10435, 2, 10),
(495, 10435, 22, 12),
(496, 10435, 72, 10),
(497, 10436, 46, 5),
(498, 10436, 56, 40),
(499, 10436, 64, 30),
(500, 10436, 75, 24),
(501, 10437, 53, 15),
(502, 10438, 19, 15),
(503, 10438, 34, 20),
(504, 10438, 57, 15),
(505, 10439, 12, 15),
(506, 10439, 16, 16),
(507, 10439, 64, 6),
(508, 10439, 74, 30),
(509, 10440, 2, 45),
(510, 10440, 16, 49),
(511, 10440, 29, 24),
(512, 10440, 61, 90),
(513, 10441, 27, 50),
(514, 10442, 11, 30),
(515, 10442, 54, 80),
(516, 10442, 66, 60),
(517, 10443, 11, 6),
(518, 10443, 28, 12);`,
    questions: [
      {
        id: 1,
        title: "Question 1: Create Employee Department Schema derived from ERD",
        description: "Create tables derived from ERD for Company Organization: Departments (DeptID PK, DeptName), Employees (EmpID PK, FullName, DeptID FK), Projects (ProjectID PK, Title), Assignments (EmpID FK, ProjectID FK, Hours).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Departments (\n    DeptID INT PRIMARY KEY,\n    DeptName NVARCHAR(100)\n);",
        solutionSQL: `CREATE TABLE Departments (\n    DeptID INT PRIMARY KEY,\n    DeptName NVARCHAR(100)\n);\n\nCREATE TABLE Employees (\n    EmpID INT PRIMARY KEY,\n    FullName NVARCHAR(100),\n    DeptID INT,\n    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)\n);\n\nCREATE TABLE Projects (\n    ProjectID INT PRIMARY KEY,\n    Title NVARCHAR(100)\n);\n\nCREATE TABLE Assignments (\n    EmpID INT,\n    ProjectID INT,\n    Hours INT,\n    PRIMARY KEY (EmpID, ProjectID),\n    FOREIGN KEY (EmpID) REFERENCES Employees(EmpID),\n    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)\n);`
      },
      {
        id: 2,
        title: "Question 2: Select Products with Price between 20 and 50",
        description: "Select ProductID, ProductName, Price from products where Price BETWEEN 20 AND 50.",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT ProductID, ProductName, Price FROM products WHERE Price BETWEEN 20 AND 50 ORDER BY Price DESC;"
      },
      {
        id: 3,
        title: "Question 3: Customers located in Germany or France",
        description: "Select CustomerID, CustomerName, ContactName, City, Country for customers in Germany or France.",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT CustomerID, CustomerName, ContactName, City, Country FROM customers WHERE Country IN ('Germany', 'France') ORDER BY Country ASC, CustomerName ASC;"
      },
      {
        id: 4,
        title: "Question 4: Order Details with Customer and Product Names",
        description: "Display OrderID, CustomerName, ProductName, Quantity, Price for all order details.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT o.OrderID, c.CustomerName, p.ProductName, od.Quantity, p.Price FROM orders o JOIN customers c ON o.CustomerID = c.CustomerID JOIN order_details od ON o.OrderID = od.OrderID JOIN products p ON od.ProductID = p.ProductID ORDER BY o.OrderID ASC;"
      },
      {
        id: 5,
        title: "Question 5: Total Revenue per Category",
        description: "Calculate total quantity and revenue for each category in categories table.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT cat.CategoryID, cat.CategoryName, SUM(od.Quantity) AS TotalQuantity, ROUND(SUM(od.Quantity * p.Price), 2) AS TotalRevenue FROM categories cat JOIN products p ON cat.CategoryID = p.CategoryID JOIN order_details od ON p.ProductID = od.ProductID GROUP BY cat.CategoryID, cat.CategoryName ORDER BY TotalRevenue DESC;"
      },
      {
        id: 6,
        title: "Question 6: Customers with Most Orders",
        description: "Find the top 5 customers with the highest count of orders.",
        initialCode: "-- Question 6: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT c.CustomerID, c.CustomerName, COUNT(o.OrderID) AS OrderCount FROM customers c JOIN orders o ON c.CustomerID = o.CustomerID GROUP BY c.CustomerID, c.CustomerName ORDER BY OrderCount DESC LIMIT 5;"
      },
      {
        id: 7,
        title: "Question 7: Products Never Ordered",
        description: "Find all products that have never appeared in any order_details row.",
        initialCode: "-- Question 7: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT p.ProductID, p.ProductName, p.Price FROM products p LEFT JOIN order_details od ON p.ProductID = od.ProductID WHERE od.OrderDetailID IS NULL;"
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure updateProductPrice (T-SQL Reference)",
        description: "Write stored procedure updateProductPrice(@productID INT, @newPrice DECIMAL(10,2)).",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE updateProductPrice\n    @productID INT,\n    @newPrice DECIMAL(10,2)\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE updateProductPrice\n    @productID INT,\n    @newPrice DECIMAL(10,2)\nAS\nBEGIN\n    IF NOT EXISTS (SELECT 1 FROM products WHERE ProductID = @productID)\n        RETURN 1;\n    UPDATE products SET Price = @newPrice WHERE ProductID = @productID;\n    RETURN 0;\nEND`
      },
      {
        id: 9,
        title: "Question 9: Trigger trg_CheckOrderQuantity (T-SQL Reference)",
        description: "Trigger on order_details ensuring Quantity > 0.",
        initialCode: "-- Question 9: Trigger (T-SQL Reference)\nCREATE TRIGGER trg_CheckOrderQuantity\nON order_details\nINSTEAD OF INSERT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE TRIGGER trg_CheckOrderQuantity\nON order_details\nINSTEAD OF INSERT\nAS\nBEGIN\n    INSERT INTO order_details (OrderID, ProductID, Quantity)\n    SELECT OrderID, ProductID, Quantity FROM inserted WHERE Quantity > 0;\nEND`
      },
      {
        id: 10,
        title: "Question 10: Increase Price by 5% for Category 1",
        description: "Update products set Price = Price * 1.05 where CategoryID = 1.",
        initialCode: "-- Question 10: Write your UPDATE SQL here\nUPDATE products\nSET Price = ",
        solutionSQL: "UPDATE products SET Price = ROUND(Price * 1.05, 2) WHERE CategoryID = 1;"
      }
    ]
  },

  // ==================== EXAM 7 ====================
  {
    id: 'pe_exam7',
    code: 'DBI202_PE_FA2025_BIKESTORES',
    title: 'PE DBI202 - Đề 7 (Fall 2025)',
    subtitle: 'Bike Stores Retail System (FA25)',
    description: 'Đề thi thực hành PE SQL Fall 2025 chính thức: Hệ thống chuỗi cửa hàng bán xe đạp (stores, staffs, customers, products, stocks, orders, order_items).',
    icon: '🚲',
    badgeClass: 'badge-db',
    themeColor: '#ec4899',
    gradient: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f472b6 100%)',
    erdDiagramHtml: `
<div class="erd-diagram-wrapper">
  <div class="erd-diagram-header">
    <div class="erd-header-title">
      <span class="erd-badge">🚲 SƠ ĐỒ THỰC THỂ QUAN HỆ (BIKE STORES RETAIL FA25 - 7 BẢNG)</span>
    </div>
  </div>
  <div style="padding: 1.5rem; color: #94a3b8; font-size: 0.9rem;">
    Các bảng CSDL: <b>stores</b> (store_id, store_name, phone, email, city, state), <b>staffs</b> (staff_id, first_name, last_name, email, phone, active, store_id, manager_id), <b>customers</b> (customer_id, first_name, last_name, phone, email, city, state), <b>products</b> (product_id, product_name, model_year, list_price, brand_name, category_name), <b>stocks</b> (store_id, product_id, quantity), <b>orders</b>, <b>order_items</b>.
  </div>
</div>
`,
    schemaDetails: [
      {
        tableName: 'stores',
        description: 'Bảng danh sách chi nhánh cửa hàng',
        columns: [
          { name: 'store_id', type: 'INT', isPk: true },
          { name: 'store_name', type: 'VARCHAR(255)' },
          { name: 'phone', type: 'VARCHAR(25)' },
          { name: 'email', type: 'VARCHAR(255)' },
          { name: 'city', type: 'VARCHAR(255)' },
          { name: 'state', type: 'VARCHAR(10)' }
        ]
      },
      {
        tableName: 'products',
        description: 'Bảng sản phẩm xe đạp & phụ kiện',
        columns: [
          { name: 'product_id', type: 'INT', isPk: true },
          { name: 'product_name', type: 'VARCHAR(255)' },
          { name: 'model_year', type: 'SMALLINT' },
          { name: 'list_price', type: 'DECIMAL(10,2)' },
          { name: 'brand_name', type: 'VARCHAR(255)' },
          { name: 'category_name', type: 'VARCHAR(255)' }
        ]
      },
      {
        tableName: 'stocks',
        description: 'Bảng tồn kho từng cửa hàng',
        columns: [
          { name: 'store_id', type: 'INT', isPk: true, isFk: true },
          { name: 'product_id', type: 'INT', isPk: true, isFk: true },
          { name: 'quantity', type: 'INT' }
        ]
      }
    ],
    dbScript: `CREATE TABLE stores(
	store_id int NOT NULL primary key,
	store_name varchar(255) NOT NULL,
	phone varchar(25) NULL,
	email varchar(255) NULL UNIQUE,
	street varchar(255) NULL,
	city varchar(255) NULL,
	state varchar(10) NULL,
	zip_code varchar(5) NULL
	);

CREATE TABLE staffs(
	staff_id int NOT NULL primary key,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
	phone varchar(25) NULL,
	active INTEGER NOT NULL,
	store_id int NOT NULL,
	manager_id int NULL,
	FOREIGN KEY(manager_id) REFERENCES staffs (staff_id),
	FOREIGN KEY(store_id) REFERENCES stores (store_id)
	);

CREATE TABLE customers(
	customer_id int NOT NULL primary key,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	phone varchar(25) NULL,
	email varchar(255) NOT NULL,
	street varchar(255) NULL,
	city varchar(50) NULL,
	state varchar(25) NULL,
	zip_code varchar(5) NULL
);

CREATE TABLE products(
	product_id int NOT NULL primary key,
	product_name varchar(255) NOT NULL,
	model_year INTEGER NOT NULL,
	list_price decimal(10, 2) NOT NULL,
	brand_name varchar(255) NULL,
	category_name varchar(255) NULL
	);

CREATE TABLE stocks(
	store_id int NOT NULL,
	product_id int NOT NULL,
	quantity int NULL,
	primary key(store_id,product_id),
	FOREIGN KEY(product_id) REFERENCES products (product_id),
	FOREIGN KEY(store_id) REFERENCES stores (store_id)
);

CREATE TABLE orders(
	order_id int NOT NULL primary key,
	customer_id int NULL,
	order_status INTEGER NOT NULL,
	order_date date NOT NULL,
	required_date date NOT NULL,
	shipped_date date NULL,
	store_id int NOT NULL,
	staff_id int NOT NULL,
                FOREIGN KEY(customer_id) REFERENCES customers (customer_id),
	FOREIGN KEY(staff_id) REFERENCES staffs (staff_id),
	FOREIGN KEY(store_id) REFERENCES stores (store_id)
);

CREATE TABLE order_items(
	order_id int NOT NULL,
	item_id int NOT NULL,
	product_id int NOT NULL,
	quantity int NOT NULL,
	list_price decimal(10, 2) NOT NULL,
	discount decimal(4, 2) NOT NULL,
	primary key (order_id,item_id),
    FOREIGN KEY(order_id) REFERENCES orders (order_id),
	FOREIGN KEY(product_id) REFERENCES products (product_id)
	);

INSERT INTO stores (store_id, store_name, phone, email, street, city, state, zip_code) VALUES
(1,'Downtown Cycles','+1-212-555-0001','downtown1@store.example','12 Broadway','New York','NY','10004'),
(2,'Riverside Wheels','+1-312-555-0002','riverside2@store.example','45 Lake St','Chicago','IL','60601'),
(3,'Bay City Bikes','+1-415-555-0003','bay3@store.example','9 Market St','San Francisco','CA','94103'),
(4,'Desert Trail','+1-480-555-0004','desert4@store.example','88 Camelback Rd','Phoenix','AZ','85016'),
(5,'Capitol Ride','+1-202-555-0005','capitol5@store.example','101 Constitution Ave','Washington','DC','20001'),
(6,'Music City Pedals','+1-615-555-0006','music6@store.example','7 Broadway','Nashville','T','37201'),
(7,'Seaside Spokes','+1-206-555-0007','seaside7@store.example','23 Pike Pl','Seattle','WA','98101'),
(8,'Harbor Gears','+1-401-555-0008','harbor8@store.example','16 Thames St','Newport','RI','02840'),
(9,'Lone Star Bikes','+1-214-555-0009','lonestar9@store.example','150 Elm St','Dallas','TX','75201'),
(10,'Liberty Pedals','+1-267-555-0010','liberty10@store.example','3 Walnut St','Philadelphia','PA','19106'),
(11,'Golden State Ride','+1-661-555-0011','golden11@store.example','55 Main St','Bakersfield','CA','93301'),
(12,'Great Lakes Cycles','+1-734-555-0012','lakes12@store.example','12 State St','Ann Arbor','MI','48104'),
(13,'Mile High Wheels','+1-303-555-0013','mile13@store.example','200 Colfax Ave','Denver','CO','80202'),
(14,'Prairie Path','+1-913-555-0014','prairie14@store.example','77 Metcalf Ave','Overland Park','KS','66210'),
(15,'Steel City Spin','+1-412-555-0015','steel15@store.example','66 Liberty Ave','Pittsburgh','PA','15222'),
(16,'Peachtree Pedals','+1-404-555-0016','peach16@store.example','18 Peachtree St','Atlanta','GA','30303'),
(17,'River Bend Wheels','+1-563-555-0017','river17@store.example','5 River Dr','Davenport','IA','52801');

INSERT INTO staffs (staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES
(1,'Anh','Tran','anh.tran@company.example','+84-90-000-0001',1,1,NULL),
(2,'Binh','Nguyen','binh.nguyen@company.example','+84-90-000-0002',1,2,NULL),
(3,'Chi','Le','chi.le@company.example','+84-90-000-0003',1,3,NULL),
(4,'Dung','Pham','dung.pham@company.example','+84-90-000-0004',1,4,NULL),
(5,'Em','Vo','em.vo@company.example','+84-90-000-0005',1,5,NULL),
(6,'Giang','Do','giang.do@company.example','+84-90-000-0006',1,6,1),
(7,'Ha','Phan','ha.phan@company.example','+84-90-000-0007',1,7,2),
(8,'Hieu','Tran','hieu.tran@company.example','+84-90-000-0008',1,8,3),
(9,'Khanh','Bui','khanh.bui@company.example','+84-90-000-0009',1,9,4),
(10,'Lan','Vu','lan.vu@company.example','+84-90-000-0010',1,10,5),
(11,'Minh','Dang','minh.dang@company.example','+84-90-000-0011',1,11,1),
(12,'Nhi','Ho','nhi.ho@company.example','+84-90-000-0012',1,12,2),
(13,'Oanh','Ly','oanh.ly@company.example','+84-90-000-0013',1,13,3),
(14,'Phuc','Nguyen','phuc.nguyen@company.example','+84-90-000-0014',1,14,4),
(15,'Quang','Tran','quang.tran@company.example','+84-90-000-0015',1,15,5),
(16,'Son','Phan','son.phan@company.example','+84-90-000-0016',1,16,1),
(17,'Trang','Dao','trang.dao@company.example','+84-90-000-0017',1,17,2);

INSERT INTO customers (customer_id, first_name, last_name, phone, email, street, city, state, zip_code) VALUES
(1,'Liam','Johnson','+1-646-555-2001','liam.johnson@cust.example','101 Maple St','New York','NY','10011'),
(2,'Emma','Smith','+1-312-555-2002','emma.smith@cust.example','22 Oak Ave','New York','IL','60610'),
(3,'Noah','Williams','+1-415-555-2003','noah.williams@cust.example','9 Pine Rd','San Francisco','CA','94107'),
(4,'Olivia','Brown','+1-480-555-2004','olivia.brown@cust.example','5 River Ln','Phoenix','AZ','85018'),
(5,'Ava','Jones','+1-202-555-2005','ava.jones@cust.example','7 Union Sq','Washington','DC','20002'),
(6,'Elijah','Garcia','+1-615-555-2006','elijah.garcia@cust.example','88 Cedar Dr','Nashville','T','37203'),
(7,'Sophia','Martinez','+1-206-555-2007','sophia.martinez@cust.example','66 Pine St','Seattle','WA','98104'),
(8,'James','Davis','+1-401-555-2008','james.davis@cust.example','33 Harbor Rd','Newport','RI','02840'),
(9,'Isabella','Rodriguez','+1-214-555-2009','isabella.rodriguez@cust.example','12 Elm St','Dallas','TX','75202'),
(10,'Mia','Wilson','+1-267-555-2010','mia.wilson@cust.example','1 Market Sq','Philadelphia','PA','19107'),
(11,'Lucas','Anderson','+1-661-555-2011','lucas.anderson@cust.example','17 Sunset Blvd','Bakersfield','CA','93304'),
(12,'Charlotte','Thomas','+1-734-555-2012','charlotte.thomas@cust.example','99 State St','Ann Arbor','MI','48108'),
(13,'Amelia','Taylor','+1-303-555-2013','amelia.taylor@cust.example','75 Lakeview Dr','Denver','CO','80203'),
(14,'Harper','Moore','+1-913-555-2014','harper.moore@cust.example','40 Prairie Rd','Overland Park','KS','66212'),
(15,'Evelyn','Jackson','+1-412-555-2015','evelyn.jackson@cust.example','24 Grant St','Pittsburgh','PA','15219'),
(16,'Henry','White','+1-404-555-2016','henry.white@cust.example','5 Peachtree Ct','Atlanta','GA','30308'),
(17,'Scarlett','Harris','+1-563-555-2017','scarlett.harris@cust.example','6 Riverbank Ave','Davenport','IA','52802');

INSERT INTO products (product_id, product_name, model_year, list_price, brand_name, category_name) VALUES
(1,'Roadster 100',2023,299.00,'Swift','Road'),
(2,'Roadster 200',2024,449.00,'Swift','Road'),
(3,'Roadster 300',2025,699.00,'Swift','Road'),
(4,'Mountain X1',2023,559.00,'Peak','Mountain'),
(5,'Mountain X2',2024,799.00,'Peak','Mountain'),
(6,'City Lite',2022,259.00,'Urban','City'),
(7,'City Pro',2024,399.00,'Urban','City'),
(8,'Gravel GX',2025,999.00,'Terra','Gravel'),
(9,'Folding ',2023,379.00,'Compact','Folding'),
(10,'Kids Fun 14',2022,149.00,'HappyRide','Kids'),
(11,'E-City 250',2024,1299.00,'Volt','E-Bike'),
(12,'E-Mountain 500',2025,2199.00,'Volt','E-Bike'),
(13,'BMX Spark',2023,149.00,'Flip','BMX'),
(14,'Touring T1',2024,899.00,'Voyage','Touring'),
(15,'Fixie Basic',2022,219.00,'Street','Fixie'),
(16,'Hybrid H2',2023,499.00,'Blend','Hybrid'),
(17,'Hybrid H3',2024,649.00,'Blend','Hybrid');

INSERT INTO stocks (store_id, product_id, quantity) VALUES
(1,1,12),(1,6,5),
(2,2,10),(2,7,6),
(3,3,8),(3,11,3),
(4,4,9),(4,16,4),
(5,5,7),(5,12,2),
(6,8,5),(6,9,6),
(7,10,10),(7,14,3);

INSERT INTO orders (order_id, customer_id, order_status, order_date, required_date, shipped_date, store_id, staff_id) VALUES
(1,1,4,'2025-08-01','2025-08-03','2025-08-03',1,1),
(2,2,4,'2025-08-02','2025-08-04','2025-08-04',2,2),
(3,3,4,'2025-08-03','2025-08-05','2025-08-05',3,3),
(4,4,4,'2025-08-04','2025-08-06','2025-08-06',4,4),
(5,5,4,'2025-08-05','2025-08-07','2025-08-07',5,5),
(6,6,4,'2025-08-06','2025-08-08','2025-08-08',6,6),
(7,7,4,'2025-08-07','2025-08-09','2025-08-09',7,7),
(8,8,4,'2025-08-08','2025-08-10','2025-08-10',8,8),
(9,9,4,'2025-08-09','2025-08-11','2025-08-11',9,9),
(10,10,3,'2025-08-10','2025-08-12','2025-08-12',10,10),
(11,11,4,'2025-08-11','2025-08-13','2025-08-13',11,11),
(12,12,3,'2025-08-12','2025-08-14','2025-08-14',12,12),
(13,13,3,'2025-08-13','2025-08-15','2025-08-15',13,13),
(14,14,3,'2025-08-14','2025-08-16','2025-08-16',14,14),
(15,15,4,'2025-08-15','2025-08-17','2025-08-17',15,15),
(16,16,3,'2025-08-16','2025-08-18','2025-08-18',16,16),
(17,17,4,'2025-08-17','2025-08-19','2025-08-19',17,17);

INSERT INTO order_items (order_id, item_id, product_id, quantity, list_price, discount) VALUES
(1,1,1,1,299.00,0.00),
(2,1,2,1,449.00,0.05),
(3,1,3,1,699.00,0.00),
(4,1,4,1,559.00,0.00),
(5,1,5,1,799.00,0.10),
(6,1,6,2,259.00,0.00),
(7,1,7,1,399.00,0.00),
(8,1,8,1,999.00,0.05),
(9,1,9,1,379.00,0.00),
(10,1,10,1,149.00,0.00),
(11,1,11,1,1299.00,0.07),
(12,1,12,1,2199.00,0.00),
(13,1,13,2,329.00,0.00),
(14,1,14,1,899.00,0.10),
(15,1,15,1,219.00,0.00),
(16,1,16,1,499.00,0.00),
(17,1,17,1,649.00,0.05);`,
    questions: [
      {
        id: 1,
        title: "Question 1: Create Bike Rental System Schema (Chen ERD)",
        description: "Create tables derived from ERD for Bike Rental System: Customers (custID PK, name, phone), Bikes (bikeID PK, model, type, hourlyRate), Stations (stationID PK, locationName), Rentals (rentalID PK, custID FK, bikeID FK, startTime, endTime, totalCost).",
        initialCode: "-- Question 1: Write CREATE TABLE statements\nCREATE TABLE Customers (\n    custID INT PRIMARY KEY,\n    name NVARCHAR(100)\n);",
        solutionSQL: `CREATE TABLE Customers (\n    custID INT PRIMARY KEY,\n    name NVARCHAR(100),\n    phone NVARCHAR(20)\n);\n\nCREATE TABLE Stations (\n    stationID INT PRIMARY KEY,\n    locationName NVARCHAR(100)\n);\n\nCREATE TABLE Bikes (\n    bikeID INT PRIMARY KEY,\n    model NVARCHAR(100),\n    type NVARCHAR(50),\n    hourlyRate DECIMAL(10,2),\n    stationID INT,\n    FOREIGN KEY (stationID) REFERENCES Stations(stationID)\n);\n\nCREATE TABLE Rentals (\n    rentalID INT PRIMARY KEY,\n    custID INT,\n    bikeID INT,\n    startTime DATETIME,\n    endTime DATETIME,\n    totalCost DECIMAL(10,2),\n    FOREIGN KEY (custID) REFERENCES Customers(custID),\n    FOREIGN KEY (bikeID) REFERENCES Bikes(bikeID)\n);`
      },
      {
        id: 2,
        title: "Question 2: List all Products with list_price > 500",
        description: "Select product_id, product_name, model_year, list_price from products where list_price > 500.",
        initialCode: "-- Question 2: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT product_id, product_name, model_year, list_price FROM products WHERE list_price > 500 ORDER BY list_price DESC;"
      },
      {
        id: 3,
        title: "Question 3: Staff Members and their Store Locations",
        description: "Select s.staff_id, s.first_name || ' ' || s.last_name AS staff_name, st.store_name, st.city from staffs s join stores st on s.store_id = st.store_id.",
        initialCode: "-- Question 3: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT s.staff_id, s.first_name || ' ' || s.last_name AS staff_name, st.store_name, st.city FROM staffs s JOIN stores st ON s.store_id = st.store_id ORDER BY s.staff_id;"
      },
      {
        id: 4,
        title: "Question 4: Out of Stock Products",
        description: "Find products with quantity <= 0 or missing in stocks table.",
        initialCode: "-- Question 4: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT p.product_id, p.product_name, COALESCE(SUM(st.quantity), 0) AS TotalStock FROM products p LEFT JOIN stocks st ON p.product_id = st.product_id GROUP BY p.product_id, p.product_name HAVING TotalStock = 0;"
      },
      {
        id: 5,
        title: "Question 5: Total Inventory Value per Store",
        description: "Calculate total stock quantity and total value (quantity * list_price) per store.",
        initialCode: "-- Question 5: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT st.store_id, st.store_name, SUM(s.quantity) AS TotalQuantity, ROUND(SUM(s.quantity * p.list_price), 2) AS TotalInventoryValue FROM stores st JOIN stocks s ON st.store_id = s.store_id JOIN products p ON s.product_id = p.product_id GROUP BY st.store_id, st.store_name ORDER BY TotalInventoryValue DESC;"
      },
      {
        id: 6,
        title: "Question 6: Products per Brand Name",
        description: "Display brand_name, count of products, and average list_price.",
        initialCode: "-- Question 6: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT brand_name, COUNT(product_id) AS ProductCount, ROUND(AVG(list_price), 2) AS AvgPrice FROM products GROUP BY brand_name ORDER BY ProductCount DESC;"
      },
      {
        id: 7,
        title: "Question 7: Most Expensive Product in Each Category",
        description: "Find the product with highest list_price in each category.",
        initialCode: "-- Question 7: Write your SQL query here\nSELECT ",
        solutionSQL: "SELECT category_name, product_name, list_price FROM products p1 WHERE list_price = (SELECT MAX(list_price) FROM products p2 WHERE p1.category_name = p2.category_name) ORDER BY category_name;"
      },
      {
        id: 8,
        title: "Question 8: Stored Procedure updateStockQuantity (T-SQL Reference)",
        description: "Write stored procedure updateStockQuantity(@store_id INT, @product_id INT, @newQty INT).",
        initialCode: "-- Question 8: Stored Procedure (T-SQL Reference)\nCREATE PROCEDURE updateStockQuantity\n    @store_id INT,\n    @product_id INT,\n    @newQty INT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE PROCEDURE updateStockQuantity\n    @store_id INT,\n    @product_id INT,\n    @newQty INT\nAS\nBEGIN\n    IF NOT EXISTS (SELECT 1 FROM stocks WHERE store_id = @store_id AND product_id = @product_id)\n        RETURN 1;\n    UPDATE stocks SET quantity = @newQty WHERE store_id = @store_id AND product_id = @product_id;\n    RETURN 0;\nEND`
      },
      {
        id: 9,
        title: "Question 9: Trigger trg_CheckStockNonNegative (T-SQL Reference)",
        description: "Trigger on stocks table to prevent quantity < 0.",
        initialCode: "-- Question 9: Trigger (T-SQL Reference)\nCREATE TRIGGER trg_CheckStockNonNegative\nON stocks\nINSTEAD OF INSERT\nAS\nBEGIN\n    -- Code here\nEND",
        solutionSQL: `CREATE TRIGGER trg_CheckStockNonNegative\nON stocks\nINSTEAD OF INSERT\nAS\nBEGIN\n    INSERT INTO stocks (store_id, product_id, quantity)\n    SELECT store_id, product_id, quantity FROM inserted WHERE quantity >= 0;\nEND`
      },
      {
        id: 10,
        title: "Question 10: Discount 2020 Model Year Products by 15%",
        description: "Update list_price = list_price * 0.85 for products with model_year <= 2020.",
        initialCode: "-- Question 10: Write your UPDATE SQL here\nUPDATE products\nSET list_price = ",
        solutionSQL: "UPDATE products SET list_price = ROUND(list_price * 0.85, 2) WHERE model_year <= 2020;"
      }
    ]
  }
];

export function getPEExamById(id: string): PEExam | undefined {
  return PE_EXAMS.find(e => e.id === id);
}
