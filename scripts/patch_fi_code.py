import json

with open("fullstackIntermediate.ts", "r", encoding="utf-8") as f:
    text = f.read()

prefix = "import { Question } from './types';\n\nexport const FULLSTACK_INTERMEDIATE: Question[] = "
json_str = text.split(prefix)[1].rstrip(";\n")
qs = json.loads(json_str)

code_map = {
    "FI-007": "interface ConfigProps {\n  host?: string;\n  port?: number;\n  timeout?: number;\n}\n\ntype StrictConfig = ___;",
    "FI-013": "type MyReadonly<T> = {\n  ___\n};",
    "FI-021": "// Tuple dengan panjang tepat 2 elemen\ntype Coordinates = ___;\n\nconst jakarta: Coordinates = [-6.2088, 106.8456];",
    "FI-025": "type ApiResponse = Promise<string>;\n// Ekstrak tipe 'string' dari Promise\ntype Unwrapped = ___<ApiResponse>;",
    "FI-030": "async function fetchUser(id: number, active: boolean) {\n  return { id, active };\n}\n\ntype FetchUserArgs = ___;",
    "FI-034": "import { useParams } from 'react-router-dom';\n\nexport const UserDetail = () => {\n  const { id } = ___;\n  return <h2>User ID: {id}</h2>;\n};",
    "FI-042": "import { Outlet } from 'react-router-dom';\n\nexport const DashboardLayout = () => {\n  return (\n    <div className=\"dashboard\">\n      <Sidebar />\n      <main>\n        ___\n      </main>\n    </div>\n  );\n};",
    "FI-044": "import { useNavigate } from 'react-router-dom';\n\nexport const LoginForm = () => {\n  const navigate = useNavigate();\n  const handleLoginSuccess = () => {\n    // Navigasi programatik ke dashboard\n    navigate('/dashboard');\n  };\n  return <button onClick={handleLoginSuccess}>Masuk</button>;\n};",
    "FI-047": "interface CardWrapperProps {\n  title: string;\n  ___;\n}\n\nexport const CardWrapper: React.FC<CardWrapperProps> = ({ title, children }) => (\n  <div className=\"card\"><h3>{title}</h3>{children}</div>\n);",
    "FI-062": "useEffect(() => {\n  const handler = () => console.log('scroll');\n  window.addEventListener('scroll', handler);\n  // Cleanup function signature\n  return ___;\n}, []);",
    "FI-065": "import { useSearchParams } from 'react-router-dom';\n\nconst [searchParams, setSearchParams] = useSearchParams();\nconst query = searchParams.get('q');",
    "FI-068": "function SubmitButton({ isLoading }: { isLoading: boolean }) {\n  return (\n    <button type=\"submit\" ___>\n      {isLoading ? 'Menyimpan...' : 'Simpan'}\n    </button>\n  );\n}",
    "FI-072": "@Transactional(___)\npublic void transferFunds(Account from, Account to, BigDecimal amount) throws PaymentException {\n  // Eksekusi mutasi saldo\n}",
    "FI-078": "@RestController\n@RequestMapping(\"/api/admin\")\npublic class AdminController {\n  @___\n  @DeleteMapping(\"/users/{id}\")\n  public ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    service.delete(id);\n    return ResponseEntity.noContent().build();\n  }\n}",
    "FI-082": "@Configuration\n@EnableAsync\npublic class AsyncConfig {\n  // Config executor\n}\n\n@Service\npublic class EmailService {\n  @___\n  public void sendEmail(String to, String msg) {\n    // Eksekusi di thread pool background\n  }\n}",
    "FI-087": "@___\npublic class GlobalApiExceptionHandler {\n  @ExceptionHandler(ResourceNotFoundException.class)\n  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND)\n                         .body(new ErrorResponse(404, ex.getMessage()));\n  }\n}",
    "FI-090": "@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  @___\n  @Transactional\n  @Query(\"UPDATE User u SET u.status = 'INACTIVE' WHERE u.lastLogin < :date\")\n  int deactivateInactiveUsers(@Param(\"date\") LocalDateTime date);\n}",
    "FI-093": "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n  http\n    .authorizeHttpRequests(auth -> auth\n      ___\n      .anyRequest().authenticated()\n    );\n  return http.build();\n}",
    "FI-099": "@EntityListeners(AuditingEntityListener.class)\n@MappedSuperclass\npublic abstract class BaseAuditableEntity {\n  @___\n  @Column(updatable = false)\n  private LocalDateTime createdAt;\n}",
    "FI-103": "@Configuration\n@___\npublic class ThirdPartyEmailConfig {\n  @Bean\n  public EmailSender emailSender() {\n    return new SmtpEmailSender();\n  }\n}",
    "FI-110": "@Configuration\npublic class WebCorsConfig implements WebMvcConfigurer {\n  @Override\n  public void addCorsMappings(CorsRegistry registry) {\n    ___\n  }\n}",
    "FI-115": "@Configuration\npublic class CorsConfig {\n  @Bean\n  ___{\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    CorsConfiguration config = new CorsConfiguration();\n    config.addAllowedOrigin(\"*\");\n    source.registerCorsConfiguration(\"/**\", config);\n    return new CorsFilter(source);\n  }\n}",
    "FI-120": "@Bean\npublic SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n  http\n    ___\n    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n  return http.build();\n}",
    "FI-122": "@Query(\"SELECT u FROM User u ___ WHERE u.department = :dept\")\nList<User> findUsersWithOrders(@Param(\"dept\") String dept);",
    "FI-128": "@Entity\npublic class Order {\n  @Id\n  private Long id;\n  \n  @ManyToOne(fetch = FetchType.LAZY)\n  ___\n  private Customer customer;\n}",
    "FI-133": "@Entity\npublic class Account {\n  @Id\n  private Long id;\n  \n  @___\n  private Status status; // Disimpan sebagai string 'ACTIVE' di DB\n}",
    "FI-139": "@Entity\npublic class User {\n  @Id\n  private Long id;\n  \n  @___\n  private List<Order> orders = new ArrayList<>();\n}",
    "FI-142": "-- Mengambil daftar email unik\nSELECT ___ email \nFROM users \nWHERE status = 'ACTIVE';",
    "FI-149": "ALTER TABLE orders\nADD CONSTRAINT fk_orders_customer\nFOREIGN KEY (customer_id) REFERENCES customers(id)\n___;",
    "FI-152": "BEGIN;\nINSERT INTO accounts (user_id, balance) VALUES (1, 50000);\n-- Terjadi kegagalan validasi, batalkan semua:\n___;",
    "FI-153": "-- Menggabungkan nama produk per kategori di PostgreSQL:\nSELECT category_id, ___ AS product_names\nFROM products\nGROUP BY category_id;",
    "FI-159": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n-- Simpan permanen ke disk:\n___;",
    "FI-164": "HTTP/1.1 200 OK\n___: no-store\nContent-Type: application/json\n\n{\"sensitive\": \"data\"}",
    "FI-169": "HTTP/1.1 ___ Not Modified\nETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"\nDate: Sun, 08 Sep 2026 10:00:00 GMT",
    "FI-170": "HTTP/1.1 200 OK\nContent-Type: application/pdf\n___: attachment; filename=\"laporan-keuangan.pdf\"",
    "FI-175": "HTTP/1.1 415 ___\nContent-Type: application/json\n\n{\"error\": \"Unsupported payload format. Expected application/json.\"}",
    "FI-177": "PUT /api/products/1 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{\"name\": \"Laptop Baru\", \"price\": 15000000}",
    "FI-180": "GET /api/data HTTP/1.1\nHost: api.example.com\n___: gzip, deflate, br",
    "FI-182": "# Simpan perubahan lokal ke stash tanpa commit\n___",
    "FI-187": "# Menampilkan riwayat log git dengan grafik satu baris\n___",
    "FI-188": "<<<<<<< HEAD\nconst theme = 'dark';\n=======\nconst theme = 'light';\n>>>>>>> feature/theme",
    "FI-192": "-- Menghitung jarak planar 2D antara dua titik geometri:\nSELECT ___ AS distance_units;",
    "FI-197": "-- Membuat point berkoordinat WGS 84 (SRID 4326) di PostGIS:\nSELECT ___ AS geom_point;"
}

count = 0
for q in qs:
    qid = q["id"]
    if qid in code_map:
        q["code"] = code_map[qid]
        count += 1

print(f"Patched {count} questions with code in intermediate.")

with open("fullstackIntermediate.ts", "w", encoding="utf-8") as f:
    f.write(prefix + json.dumps(qs, indent=2, ensure_ascii=False) + ";\n")

print("Updated fullstackIntermediate.ts successfully.")
