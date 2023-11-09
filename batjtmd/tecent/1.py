import openai

openai.api_key = "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"  # openai 的sdk
COMPLETION_MODEL = "text-davinci-003"  # 模板常量 达芬奇 自动完成
# 字符串模板
# 可以换行
# 描述细节需求
# 输出的格式
# 分步去执行
prompt = """ 
Consideration product:工厂现货pvc充气青蛙夜市地摊热卖充气玩具发蛙儿水上玩具

1.Compose human readable title used on Amazon in english whthin 20 words
2.Write 5 selling points for the product in Amazon
3. Evaluat a price range for this product in U.S.

Output the result in json format whith three properties called title,
selling_point,and price_range
"""


# 定义函数
def get_response(prompt):
    # 大模型很值钱
    completions = openai.Completion.create(
        engine=COMPLETION_MODEL,  # 模型
        prompt=prompt,  # 提示词
        max_tokens=512,  # 省点
        n=1,  # 返回一条结果
        stop=None,
        temperature=0.0,  # 自由发挥度 0-2
    )
    # print(completions)
    message = completions.choices[0].text  #
    return message

print(get_response(prompt))
# {
#   title:1,
#   selling_points:"",
#   price_range: ,
# }
