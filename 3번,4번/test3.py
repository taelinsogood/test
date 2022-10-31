# 3번 문제
def factorial(n):
    if n == 1:      # n이 1일 때
        return 1    # 1을 반환하고 재귀호출을 끝냄
    return n * factorial(n - 1)    # n과 factorial 함수에 n - 1을 넣어서 반환된 값을 곱함
 
print(factorial(4))

# 4번 문제 해결 방법
import sys
sys.setrecursionlimit(1200)
def func(n):
    print(n)
    if n<1:
        return
    else:
        return func(n-1)
func(1000)