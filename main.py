import resume_parser
import resume_summary_generator

def main():
    parsed_resume_data = resume_parser.parse_resume("resume.pdf")  # Replace "resume.pdf" with your actual file path
    optimized_summary = resume_summary_generator.generate_about_me_summary(parsed_resume_data)
    print(optimized_summary)

if __name__ == "__main__":
    main()
