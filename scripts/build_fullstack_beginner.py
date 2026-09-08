import json

questions = []

def add_q(id_num, topic, qtype, q, opts, ans, exp_corr, exp_a, exp_b, exp_c, exp_d, code=None):
    qid = f"FB-{id_num:03d}"
    item = {
        "id": qid,
        "level": "beginner",
        "topic": topic,
        "questionType": qtype,
        "question": q,
        "options": opts,
        "answer": ans,
        "explanation": {
            "correct": exp_corr,
            "A": exp_a,
            "B": exp_b,
            "C": exp_c,
            "D": exp_d
        },
        "jobId": "fullstack"
    }
    if code:
        item["code"] = code
    questions.append(item)

print("Builder helper ready")
