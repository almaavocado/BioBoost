import re
import PyPDF2
import textract
import docx

def parse_resume(file_path):
    file_extension = file_path.split('.')[-1]

    if file_extension == 'pdf':
        text = extract_text_from_pdf(file_path)
    elif file_extension == 'docx':
        text = extract_text_from_docx(file_path)
    else:
        return None

    # Extract relevant information from the text and return the parsed data
    parsed_data = extract_information(text)
    return parsed_data

import PyPDF2

def extract_text_from_pdf(file_path):
    with open(file_path, "rb") as f:
        pdf_reader = PyPDF2.PdfReader(f)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def parse_resume(file_path):
    if file_path.endswith(".pdf"):
        text = extract_text_from_pdf(file_path)
    else:
        text = extract_text_from_docx(file_path)
    
    parsed_data = extract_information(text)
    return parsed_data


def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    paragraphs = [p.text for p in doc.paragraphs]
    return '\n'.join(paragraphs)

def extract_information(pdf_path):
    parsed_data = {}

    # Extract text from PDF using textract
    text = textract.process(pdf_path).decode("utf-8")

    # Extract Name
    name = extract_name(text)
    parsed_data['name'] = name

    # Extract Work Experience
    work_experience_keywords = ["work experience", "professional experience", "employment history"]
    work_experience = extract_section_by_keywords(text, work_experience_keywords)
    parsed_data['work_experience'] = work_experience

    # Extract Education
    education_keywords = ["education", "academic background", "degrees", "university", "college", "diploma"]
    education = extract_section_by_keywords(text, education_keywords)
    parsed_data['education'] = education

    # Extract Skills
    skills_keywords = ["skills", "technical skills", "languages", "programming", "tools", "certifications"]
    skills = extract_section_by_keywords(text, skills_keywords)
    parsed_data['skills'] = skills

    # Extract Achievements and Awards
    achievements_keywords = ["awards", "honors", "recognitions", "achievements", "accomplishments"]
    achievements = extract_section_by_keywords(text, achievements_keywords)
    parsed_data['achievements'] = achievements

    # Extract Certifications and Licenses
    certifications_keywords = ["certifications", "licenses", "professional affiliations", "memberships"]
    certifications = extract_section_by_keywords(text, certifications_keywords)
    parsed_data['certifications'] = certifications

    # Extract Projects
    projects_keywords = ["projects", "personal projects", "research projects", "contributions"]
    projects = extract_section_by_keywords(text, projects_keywords)
    parsed_data['projects'] = projects

    return parsed_data

def extract_name(text):
    name_regex = r"^(.*?)\s*\|"
    match = re.search(name_regex, text, re.MULTILINE)
    if match:
        name = match.group(1).strip()
        return name
    return ""


def extract_section_by_keywords(text, keywords):
    section = ""
    text_lower = text.lower()

    for keyword in keywords:
        start_index = text_lower.find(keyword.lower())
        if start_index != -1:
            end_index = text_lower.find('\n', start_index)
            if end_index != -1:
                section = text[start_index:end_index].strip()
                break

    return section

