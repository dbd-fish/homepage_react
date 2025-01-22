# app/models/__init__.py

# 各モデルをインポート
from .user import User

# 他のモデルがある場合も同様に追加
# from .other_model import OtherModel

# Alembicや他のスクリプトがapp.modelsをインポートするだけで全モデルを認識できるようにする
__all__ = [
    "user",
    "user_profile",
    "user_ip_address",
    "user_group",
    "group_profile",
    "user_group_membership",
    "report",
    "report_tag",
    "report_tag_link",
    "report_supplement",
    "user_evaluation_history",
    "report_evaluation_history",
    "group_evaluation_history",
    "report_comment_history",
    "tag_view_history",
    "group_evaluation",
    "report_view_history",
    "user_view_history",
    "user_search_history",
    "group_search_history",
    # "OtherModel"  # 他のモデルを追加する場合もここに名前を追加
]
