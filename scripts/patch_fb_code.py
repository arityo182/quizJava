import json

with open("fullstackBeginner.ts", "r", encoding="utf-8") as f:
    text = f.read()

prefix = "import { Question } from './types';\n\nexport const FULLSTACK_BEGINNER: Question[] = "
json_str = text.split(prefix)[1].rstrip(";\n")
qs = json.loads(json_str)

code_map = {
    "FB-005": "const scores = [10, 20, 30];",
    "FB-016": "// Pendekatan A: any\nfunction parseData(input: any) {\n  return input.toUpperCase();\n}\n\n// Pendekatan B: unknown (Recommended)\nfunction parseDataSafe(input: unknown) {\n  if (typeof input === 'string') {\n    return input.toUpperCase();\n  }\n  return '';\n}",
    "FB-019": "// A: Type Predicate\nfunction isUser(obj: any): obj is User {\n  return obj && typeof obj.name === 'string';\n}\n\n// B: Boolean Biasa\nfunction isUser(obj: any): boolean {\n  return obj.isUser == true;\n}",
    "FB-025": "interface User {\n  id: number;\n  name: string;\n}\n\nconst [user, setUser] = useState<___>(null);",
    "FB-028": "const handleChange = (e: ___) => {\n  console.log(e.target.value);\n};\n\nreturn <input type=\"text\" onChange={handleChange} />;",
    "FB-032": "// Definisi Props Bersih\ninterface CardProps {\n  title: string;\n  count?: number;\n  onSelect: (id: string) => void;\n}\n\nexport const Card: React.FC<CardProps> = ({ title, count = 0, onSelect }) => {\n  return <div>{title} ({count})</div>;\n};",
    "FB-033": "useEffect(() => {\n  fetchData();\n}, ___);",
    "FB-038": "const inputRef = useRef<___>(null);\n\nconst focusInput = () => {\n  inputRef.current?.focus();\n};",
    "FB-039": "// A (Immutability)\nsetList([...list, newItem]);\n\n// B (Direct Mutation - BAD)\nlist.push(newItem);\nsetList(list);",
    "FB-040": "function SecretView({ isVisible }: { isVisible: boolean }) {\n  return (\n    <div>\n      {isVisible && <span>Data Rahasia</span>}\n    </div>\n  );\n}",
    "FB-044": "interface ButtonProps {\n  label: string;\n  ___;\n}\n\nexport const Button: React.FC<ButtonProps> = ({ label, onClick }) => (\n  <button onClick={onClick}>{label}</button>\n);",
    "FB-046": "// Pendekatan Callback Updater\nconst handleMultiIncrement = () => {\n  setCount(prev => prev + 1);\n  setCount(prev => prev + 1);\n};",
    "FB-049": "function useToggle(initial: boolean = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue(v => !v);\n  ___\n}",
    "FB-050": "function ControlledInput() {\n  const [name, setName] = useState('');\n  return (\n    <input\n      type=\"text\"\n      value={name}\n      onChange={(e) => setName(e.target.value)}\n    />\n  );\n}",
    "FB-057": "@GetMapping(\"/users/{id}\")\npublic ResponseEntity<User> getUserById(@___ Long id) {\n  return ResponseEntity.ok(userService.findById(id));\n}",
    "FB-060": "// A: Field Injection (Not Recommended)\n@Service\npublic class OrderService {\n  @Autowired\n  private OrderRepository repo;\n}\n\n// B: Constructor Injection (Recommended)\n@Service\npublic class OrderService {\n  private final OrderRepository repo;\n  public OrderService(OrderRepository repo) {\n    this.repo = repo;\n  }\n}",
    "FB-062": "@___\npublic class CustomerService {\n  public void processCustomer() {\n    // Logika bisnis\n  }\n}",
    "FB-067": "@GetMapping(\"/products/{id}\")\npublic ResponseEntity<Product> getProduct(@PathVariable Long id) {\n  Product p = productService.find(id);\n  return ResponseEntity.status(HttpStatus.OK).header(\"X-App\", \"Demo\").body(p);\n}",
    "FB-068": "public class RegisterRequest {\n  @___\n  private String username;\n  \n  @Email\n  private String email;\n}",
    "FB-073": "# application.properties\nserver.port=8081\nspring.application.name=my-service",
    "FB-076": "// DTO Pattern\npublic record UserResponseDto(Long id, String name, String email) {}\n\n@GetMapping(\"/{id}\")\npublic UserResponseDto getUser(@PathVariable Long id) {\n  return userService.getUserDto(id);\n}",
    "FB-079": "@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(@___ @RequestBody UserCreateDto dto) {\n  return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(dto));\n}",
    "FB-084": "@PostMapping\npublic ResponseEntity<User> createUser(@RequestBody UserDto dto) {\n  User result = userService.save(dto);\n  // Seharusnya return 201 Created\n  return ResponseEntity.ok(result);\n}",
    "FB-087": "@___(\"/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n  userService.delete(id);\n  return ResponseEntity.noContent().build();\n}",
    "FB-089": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n  @ExceptionHandler(ResourceNotFoundException.class)\n  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND)\n                         .body(new ErrorResponse(404, ex.getMessage()));\n  }\n}",
    "FB-095": "public interface UserRepository extends JpaRepository<User, Long> {\n  // Mengembalikan Optional<User>\n  // Optional<User> findById(Long id);\n}",
    "FB-098": "Optional<User> userOpt = userRepository.findById(id);\nUser user = userOpt.orElseThrow(() -> new ResourceNotFoundException(\"User tidak ditemukan\"));",
    "FB-100": "public interface ProductRepository extends JpaRepository<Product, ___> {\n  List<Product> findByCategory(String category);\n}",
    "FB-101": "User newUser = new User(\"Budi\", \"budi@mail.com\");\nUser savedUser = userRepository.save(newUser);\nSystem.out.println(savedUser.getId()); // ID terisi otomatis",
    "FB-106": "public interface UserRepository extends JpaRepository<User, Long> {\n  @___(\"SELECT u FROM User u WHERE u.email = :email\")\n  Optional<User> findUserByEmail(@Param(\"email\") String email);\n}",
    "FB-112": "SELECT id, title, created_at \nFROM articles \nORDER BY created_at ___;\n-- Mengurutkan dari artikel paling baru",
    "FB-113": "-- Good Practice:\nSELECT id, username, email FROM users WHERE status = 'ACTIVE';\n\n-- Bad Practice (Avoid in prod):\nSELECT * FROM users WHERE status = 'ACTIVE';",
    "FB-117": "INSERT INTO customers (name, email) \nVALUES ('Budi', 'budi@mail.com');",
    "FB-123": "@PostMapping(\"/products\")\npublic ResponseEntity<Product> createProduct(@RequestBody ProductDto dto) {\n  Product created = productService.create(dto);\n  return ResponseEntity.status(HttpStatus.CREATED).body(created);\n}",
    "FB-125": "POST /api/users HTTP/1.1\nHost: api.example.com\nContent-Type: application/___\n\n{\"name\": \"Andi\", \"role\": \"USER\"}",
    "FB-126": "GET /api/v1/non-existent-endpoint HTTP/1.1\nHost: api.example.com",
    "FB-127": "// RESTful clean URL:\n// GET /api/users/123\n\n// RPC style URL:\n// GET /api/getUserById?id=123",
    "FB-130": "@DeleteMapping(\"/{id}\")\npublic ResponseEntity<Void> remove(@PathVariable Long id) {\n  service.delete(id);\n  return ResponseEntity.noContent().build(); // HTTP 204\n}",
    "FB-131": "GET /api/profile HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "FB-133": "@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {\n  // Return HTTP 400 Bad Request\n  return ResponseEntity.badRequest().body(errors);\n}",
    "FB-135": "HTTP/1.1 503 Service Unavailable\nRetry-After: 120\nContent-Type: application/json\n\n{\"error\": \"Server is currently undergoing maintenance.\"}",
    "FB-140": "# Mengunduh pembaruan dan merge ke branch aktif\ngit ___",
    "FB-146": "{\n  \"type\": \"Feature\",\n  \"geometry\": {\n    \"type\": \"Point\",\n    \"coordinates\": [106.8272, -6.1754]\n  },\n  \"properties\": { \"name\": \"Monas Jakarta\" }\n}",
    "FB-147": "// Inisialisasi peta Leaflet pada elemen <div id=\"map\"></div>\nconst map = L.__('map').setView([-6.2088, 106.8456], 13);"
}

count = 0
for q in qs:
    qid = q["id"]
    if qid in code_map:
        q["code"] = code_map[qid]
        count += 1

print(f"Patched {count} questions with code snippets.")

with open("fullstackBeginner.ts", "w", encoding="utf-8") as f:
    f.write(prefix + json.dumps(qs, indent=2, ensure_ascii=False) + ";\n")

print("Updated fullstackBeginner.ts successfully.")
