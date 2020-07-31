from typing import List, Optional

from admin_dashboard.models.user.user_model import UserInfo

class IUserRepository:
    def get_users(self, usersQueryParams) -> List[UserInfo]:
        raise NotImplementedError("UserRepository interface must be implemented with get_users method")


    def get_user_by_id(self, user_id: str) -> UserInfo:
        raise NotImplementedError("UserRepository interface must be implemented with get_user_by_id method")

        