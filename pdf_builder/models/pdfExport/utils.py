from email.mime import application
from django.http import HttpResponse
from xhtml2pdf import pisa
from django.template.loader import get_template
from io import BytesIO

def render_pdf(template_src, context = {}):
    template = get_template(template_src)
    html = template.render(context)
    result = BytesIO()
    pdf= pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(),  content_type='application/pdf')
    else:
        return None