from django.db import models

# Create your models here.

#producto
#categoria

class Contacto(models.Model):
    idContacto=models.CharField(max_length=100,null=True)
    nombres=models.CharField(max_length=100)
    apellidos=models.CharField(max_length=100)
    ciudad=models.CharField(max_length=100)
    correo=models.CharField(max_length=50)
    celular=models.CharField(max_length=30)
    identificacion=models.CharField(max_length=30)
    comentario=models.CharField(max_length=200)
    creado=models.DateTimeField(auto_now_add=True)
    actualizado=models.DateTimeField(auto_now=True)

class Pgato(models.Model):
    idProducto=models.CharField(max_length=30,null=True)
    nombre=models.CharField(max_length=30)
    descripcion=models.CharField(max_length=150)
    precio=models.IntegerField()
    imagen=models.ImageField(upload_to="productos", null=True)
    creado=models.DateTimeField(auto_now_add=True)
    actualizado=models.DateTimeField(auto_now=True)

class Phamster(models.Model):
    idProducto=models.CharField(max_length=30,null=True)
    nombre=models.CharField(max_length=30)
    descripcion=models.CharField(max_length=150)
    precio=models.IntegerField()
    imagen=models.ImageField(upload_to="productos", null=True)
    creado=models.DateTimeField(auto_now_add=True)
    actualizado=models.DateTimeField(auto_now=True)

class Pperro(models.Model):
    idProducto=models.CharField(max_length=30,null=True)
    nombre=models.CharField(max_length=30)
    descripcion=models.CharField(max_length=150)
    precio=models.IntegerField()
    imagen=models.ImageField(upload_to="productos", null=True)
    creado=models.DateTimeField(auto_now_add=True)
    actualizado=models.DateTimeField(auto_now=True)

class Pnovedade(models.Model):
    idProducto=models.CharField(max_length=30,null=True)
    nombre=models.CharField(max_length=30)
    descripcion=models.CharField(max_length=150)
    precio=models.IntegerField()
    imagen=models.ImageField(upload_to="productos", null=True)
    creado=models.DateTimeField(auto_now_add=True)
    actualizado=models.DateTimeField(auto_now=True)




