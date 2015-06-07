from django.shortcuts import render, render_to_response, RequestContext

# Create your views here.

def home(request):
    return render_to_response("piggy_page_with_elements.html", locals(), context_instance=RequestContext(request))