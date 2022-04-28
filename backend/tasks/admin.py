from django.contrib import admin

from .models import Task

# Register your models here.

class TaskAdmin(admin.ModelAdmin):
    '''
        Admin View for Task
    '''
    list_display = ('name', 'importance', 'is_completed',)
    list_filter = ('importance',)
    search_fields = ('name',)

admin.site.register(Task, TaskAdmin)