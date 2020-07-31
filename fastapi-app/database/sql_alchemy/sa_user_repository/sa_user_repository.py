from typing import List
from sqlalchemy.orm import Session

from admin_dashboard.models.user.user_model import UserInfo, UsersQueryParams
from admin_dashboard.models.user.i_user_repository import IUserRepository
from database.sql_alchemy.schema import User, Group
from database.sql_alchemy.connection import session_scope

class SAUserRepository(IUserRepository):
    def get_users(self, usersQueryParams: UsersQueryParams) -> List[UserInfo]:
        offset = usersQueryParams.offset
        limit = usersQueryParams.limit
        group_name = usersQueryParams.group_name
        group_rank = usersQueryParams.group_rank

        
        with session_scope() as session:
            query = session\
                .query(User.user_id, User.user_name, Group.group_id, Group.group_name, Group.group_rank)\
                .filter(User.group_id == Group.group_id)\
                
            if group_name is not None:
                query = query.filter(Group.group_name == group_name)

            if group_rank is not None:
                query = query.filter(Group.group_rank == group_rank)

            # Pagenation
            query = query.offset(offset).limit(limit)
        
        return query.all()
        

    def get_user_by_id(self, user_id: int) -> UserInfo:
        with session_scope() as session:
            query_result = session\
                .query(User.user_id, User.user_name, Group.group_id, Group.group_name, Group.group_rank)\
                .filter(User.group_id == Group.group_id)\
                .filter(User.user_id == user_id)\
                .first()
        
        return query_result