from enum import Enum
from typing import Optional
from pydantic import BaseModel, validator

# class GroupRankOption(BaseModel):
#     name: str
#     min_num_users: int
#     max_num_users: int

class GroupRank(str, Enum):
    gold = "Gold"
    silver = "Silver"
    bronze = "Bronze"
    normal = "Normal"

    # gold = GroupRankOption(name="Gold", min_num_users = 300, max_num_users = 399)
    # silver = GroupRankOption(name="Silver", min_num_users = 200, max_num_users = 299)
    # bronze = GroupRankOption(name="Bronze", min_num_users = 100, max_num_users = 199)
    # normal = GroupRankOption(name="Normal", min_num_users = 0, max_num_users = 99)

class Group(BaseModel):
    group_id: str
    group_name: str
    group_rank: GroupRank

    class Config:
            orm_mode = True

class GroupFilter(BaseModel): 
    name: Optional[str]
    rank: Optional[GroupRank]
