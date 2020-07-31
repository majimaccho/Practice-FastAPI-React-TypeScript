from fastapi import APIRouter, Depends
from typing import Dict, List, Optional, Tuple
from pydantic import BaseModel, validator
from pydantic.types import Json
from admin_dashboard.models.user.user_model import UserInfo, UsersQueryParams
from admin_dashboard.models.user.user_service import UserService
from database.sql_alchemy.sa_user_repository.sa_user_repository import SAUserRepository


class UserRouter(APIRouter):
    def __init__(self, userService: UserService):
        super().__init__()
        self.user_service = userService

userRepository = SAUserRepository()
userService = UserService(userRepository=userRepository)
router = UserRouter(userService=userService)


@router.get("/users/", tags=["users"], response_model=List[UserInfo])
async def find_users(
    offset: int = 0, 
    limit: int = 25, 
    group_name: Optional[str] = None, 
    group_rank: Optional[str] = None
):
    usersQueryParams = UsersQueryParams(offset=offset, limit=limit, group_name=group_name, group_rank=group_rank)
    return userService.get_users(usersQueryParams)
    
    

@router.get("/users/{user_id}", tags=["users"], response_model=UserInfo)
async def find_user_by_id(user_id:int):
    return userService.get_users_by_id(user_id)