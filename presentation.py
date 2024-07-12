from odf.opendocument import OpenDocumentPresentation
from odf.style import Style, TextProperties
from odf.text import P
from odf.draw import Page, Frame, TextBox

# Create a presentation
presentation = OpenDocumentPresentation()

# Define a style for the slides
title_style = Style(name="Title", family="paragraph")
title_style.addElement(TextProperties(attributes={'fontsize': "32pt", 'fontweight': "bold"}))
presentation.styles.addElement(title_style)

content_style = Style(name="Content", family="paragraph")
content_style.addElement(TextProperties(attributes={'fontsize': "24pt"}))
presentation.styles.addElement(content_style)

# Function to add a slide
def add_slide(title, content):
    page = Page(masterpagename="Default")
    title_frame = Frame(width="28cm", height="3cm", x="1cm", y="1cm")
    title_textbox = TextBox()
    title_p = P(stylename=title_style, text=title)
    title_textbox.addElement(title_p)
    title_frame.addElement(title_textbox)
    page.addElement(title_frame)

    content_frame = Frame(width="28cm", height="15cm", x="1cm", y="4cm")
    content_textbox = TextBox()
    for line in content:
        content_p = P(stylename=content_style, text=line)
        content_textbox.addElement(content_p)
    content_frame.addElement(content_textbox)
    page.addElement(content_frame)

    presentation.presentation.addElement(page)

# Title Slide
add_slide("Thor Systems Project", ["University Project Presentation", "Hendrik Siemens", "Date: \today"])

# Table of Contents
add_slide("Table of Contents", ["Introduction", "Project Background", "System Architecture", "Implementation", "Results", "Conclusion"])

# Slides
add_slide("Introduction", ["Project Overview", "Objectives", "Team Members"])
add_slide("Project Background", ["Motivation", "Initial Research", "Problem Statement"])
add_slide("System Architecture", ["Overview of the System", "Key Components", "Technologies Used"])
add_slide("Implementation", ["Development Process", "Challenges Faced", "Solutions Implemented"])
add_slide("Results", ["Data Analysis", "System Performance", "User Feedback"])
add_slide("Conclusion", ["Summary of Findings", "Future Work", "Acknowledgments"])

# Save the presentation
presentation.save("Thor_Systems_Project.odp")
