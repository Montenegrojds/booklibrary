from django.db import models

# Create your models here.

"""
Book model:
- Title (string)
- Description (string)
- Author (string)
- Date of publication (date)
- Archived (boolean)
- Stock (integer)
"""
class Book(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=400)
    author = models.CharField(max_length=30)
    publication_date = models.DateTimeField(auto_now_add=False)
    archived = models.BooleanField()
    stock = models.IntegerField(null=False)


