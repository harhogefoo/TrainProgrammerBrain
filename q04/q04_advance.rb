
# n[cm]の棒
# m人
def cutbar(n, m)
  count = 0       # 処理回数
  current = 1     # 現在の棒の長さcurrent[cm]
  while n > current do
    # 棒の長さがm人未満のとき2倍、大きいとき+m
    current += current < m ? current : m
    count = count + 1
  end
  puts(count)
end


cutbar(20, 3)    #長さ20cm、3人
cutbar(100, 5)   #長さ100cm、5人