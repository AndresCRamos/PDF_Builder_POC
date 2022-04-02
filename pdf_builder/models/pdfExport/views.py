from django.shortcuts import render
from django.http import HttpResponse
from . import utils

# Create your views here.

def pdfExport(request):
    context = {
        "name": "Andres",
        "last_name": "Ramos",
        "document": "1234567890",
        "service": "Programacion",
        "name_contractor": "Frank",
        "last_name_contractor": "Muñoz",
        "document_contractor": "1231231234"
    }
    return utils.render_pdf("pdf/preview.html", context)
    # return render(request, "pdf/preview.html", context)
    

