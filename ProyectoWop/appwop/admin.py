from django.contrib import admin
from appwop.models import *
# Register your models here.

class PgatoAdmin(admin.ModelAdmin):
    readonly_fields=('creado','actualizado')
    list_display=('idProducto','nombre','descripcion','precio')
    ordering=('creado',)

class PperroAdmin(admin.ModelAdmin):
    readonly_fields=('creado','actualizado')
    list_display=('idProducto','nombre','descripcion','precio')
    ordering=('creado',)

class PhamsterAdmin(admin.ModelAdmin):
    readonly_fields=('creado','actualizado')
    list_display=('idProducto','nombre','descripcion','precio')
    ordering=('creado',)

class PnovedadeAdmin(admin.ModelAdmin):
    readonly_fields=('creado','actualizado')
    list_display=('idProducto','nombre','descripcion','precio')
    ordering=('creado',)

class ContactoAdmin(admin.ModelAdmin):
    readonly_fields=('creado','actualizado')
    list_display=('idContacto','identificacion')
    ordering=('creado',)


admin.site.register(Pgato,PgatoAdmin)
admin.site.register(Pperro,PperroAdmin)
admin.site.register(Phamster,PhamsterAdmin)
admin.site.register(Pnovedade,PnovedadeAdmin)
admin.site.register(Contacto,ContactoAdmin)
