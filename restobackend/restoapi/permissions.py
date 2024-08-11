from rest_framework.permissions import BasePermission, SAFE_METHODS


"""
the permission will allow only the admins to perform certain actions
"""
class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_staff
    

"""
the request will be authenticated as a user or a read_only request.
make sure the user is authenticated before they can send a POST request
"""
class IsAuthenticatedOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True 
        return request.user and request.user.is_authenticated