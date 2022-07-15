from sre_constants import SUCCESS
from typing import Any
from django.shortcuts import render, redirect
from django.http import HttpResponse
from.models import Pnovedade,Pperro,Pgato,Phamster
from appwop.models import Contacto
from django.core.paginator import Paginator
from django.http import Http404
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
# Create your views here.

def index(request):
    try:
        pnovedades = Pnovedade.objects.all()
        context= {'pnovedades':pnovedades}

        return render(request, "index.html", context)
    except:
        mensaje = "Problemas con la carga en el home" 
        return HttpResponse(mensaje)   
    
def caninos(request):
    try:
        pperros = Pperro.objects.all()
        context= {'pperros':pperros}
        return render(request, "canina.html", context)
    except:
        mensaje = "Problemas con la carga en el home" 
        return HttpResponse(mensaje)   

def felinos(request):
    try:
        pgatos = Pgato.objects.all()
        context= {'pgatos':pgatos}
        return render(request, "felinos.html", context)
    except:
        mensaje = "Problemas con la carga en el home" 
        return HttpResponse(mensaje)

def hamsters(request):
    try:
        phamsters = Phamster.objects.all()
        context= {'phamsters':phamsters}
        return render(request, "hamsters.html", context)
    except:
        mensaje = "Problemas con la carga en el home" 
        return HttpResponse(mensaje) 

def contacto(request):
    return render(request, "contacto.html")

def carrito(request):
    return render(request, "car-seg.html")

def login(request):
    return render(request, "login-register.html")

def wiki(request):
    return render(request, "animal-wiki.html")

def register(request):
    return render(request, "register.html")

def carrito2(request):
    return render(request, "carrito.html")

def registrar_contacto(request):
    nombres=request.GET["txt_nombres"]
    apellidos=request.GET["txt_apellidos"]
    ciudad=request.GET["txt_ciudad"]
    correo=request.GET["txt_correo"]
    celular=request.GET["txt_numero"]
    identificacion=request.GET["txt_comentario"]
    comentario=request.GET["txt_comentario"]
    if len(nombres)>0:
        registro=Contacto(nombres=nombres,apellidos=apellidos,ciudad=ciudad,
        correo=correo,celular=celular,identificacion=identificacion,comentario=comentario,)  
        registro.save()
        mensaje="El mensaje se envio correctamente..."
    else:    
        mensaje="El mensaje no se envio correctamente..."
    return HttpResponse(mensaje)


def newsignup(request):
    if request.method=="POST":
        if request.POST.get('password1')==request.POST.get('password2'):
            try:
                saveuser=User.objects.create_user(request.POST.get('username'),password=request.POST.get('password1'))
                saveuser.save()
                return render(request,'login-register.html',{"form":UserCreationForm(),"info":"Usuario "+request.POST.get('username')+" Registrado exitosamente!..."})
            except IntegrityError:
                return render(request,'login-register.html',{"form":UserCreationForm(),"error":"Usuario "+request.POST.get('username')+" ya se encuentra registrado!..."})
        else:
            return render(request,'login-register.html',{"form":UserCreationForm(),"error":"Usuario incorrecto!"})
    else:
        return render(request,'login-register.html', {"form":UserCreationForm})