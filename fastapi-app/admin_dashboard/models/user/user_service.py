from typing import List, Optional, Tuple

from admin_dashboard.models.user.user_model import UserInfo, UsersQueryParams
from admin_dashboard.models.user.i_user_repository import IUserRepository

class UserService():
    def __init__(self, userRepository: IUserRepository):
        self.userRepository = userRepository

    def get_users(self, usersQueryParams: UsersQueryParams) -> List[UserInfo]:
        return self.userRepository.get_users(usersQueryParams)

    def get_users_by_id(self, user_id:int) -> UserInfo:
        return self.userRepository.get_user_by_id(user_id)