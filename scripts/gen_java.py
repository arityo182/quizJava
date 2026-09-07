import json

def make_ts_file(var_name, questions, file_path):
    content = 'import type { Question } from "./types";\n\n'
    content += f'export const {var_name}: Question[] = '
    content += json.dumps(questions, indent=2, ensure_ascii=False)
    content += ';\n'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {len(questions)} questions to {file_path}")

print("Helper ready")
