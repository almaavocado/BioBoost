from resume_parser import parse_resume

def test_resume_parsing(resume_file_path):
    parsed_resume = parse_resume(resume_file_path)
    print("Parsed Resume:")
    print(parsed_resume)


resume_file_path = r"C:\Users\Alma Alvarado\BioBoost\resume-parsing\ProjectDesignerResume.docx"
test_resume_parsing(resume_file_path)

