from typing import Optional
from pydantic import BaseModel, validator

from admin_dashboard.models.group.group_model import Group, GroupFilter, GroupRank

class UserBase(BaseModel):
    user_id: int
    user_name: str

    class Config:
            orm_mode = True

class UserInfo(UserBase):
    group_id: int
    group_name: str
    group_rank: GroupRank

class UsersQueryParams(BaseModel): 
    offset: int
    limit: int
    group_name: Optional[str]
    group_rank: Optional[GroupRank]