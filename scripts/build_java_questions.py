import json

def create_question(qid, level, topic, q, opts, ans, exp_corr, exp_a, exp_b, exp_c, exp_d, mode=None):
    obj = {
        "id": qid,
        "level": level,
        "topic": topic,
        "question": q,
        "options": opts,
        "answer": ans,
        "explanation": {
            "correct": exp_corr,
            "A": exp_a,
            "B": exp_b,
            "C": exp_c,
            "D": exp_d
        }
    }
    if mode:
        obj["mode"] = mode
    return obj

print("Setup template ok")
