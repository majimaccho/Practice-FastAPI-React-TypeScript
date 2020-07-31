import pytest 
from fastapi.testclient import TestClient
from urllib.parse import urlencode
import json

from main import app 
from admin_dashboard.models.user.user_model import UserInfo, UsersQueryParams
from admin_dashboard.models.group.group_model import Group

testClient = TestClient(app)
user_endpoint = '/users'

class TestUserRouter():
    def test_get_all_users(self):
        res = testClient.get(user_endpoint)
        for user in res.json():
            assert UserInfo(**user).dict() == user
        

    def test_get_all_users_in_silver_rank_group(self):
        query_parm = { "offset": 0, 'limit': 25, "group_rank": "Silver"}
        res = testClient.get(user_endpoint,params=query_parm).json()
        
        for user in res:
            assert user['group_rank'] == "Silver"
            assert UserInfo(**user).dict() == user

    def test_get_all_users_in_a_group(self):        
        query_parm = { "offset": 0, 'limit': 25, "group_name": "Snufkins"}
        res = testClient.get(user_endpoint,params=query_parm).json()
        
        for user in res:
            assert user['group_name'] == "Snufkins"
            assert UserInfo(**user).dict() == user

    def test_get_user_by_id(self):
        res = testClient.get(user_endpoint + '/1')
        assert UserInfo(**res.json()) == res.json() 

    