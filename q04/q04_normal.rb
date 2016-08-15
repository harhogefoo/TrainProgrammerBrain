
# n[cm]の棒
# m人
# 現在の棒の数current本
def cutbar(n, m, current)
  if current >= n then            #棒の数がn[cm]以上
    0
  elsif current < m then          #棒の数がm人未満
    1 + cutbar(m,n,current*2)
  else                            #棒の数がm人以上
    1 + cutbar(m,n,current+m)
  end
end


puts cutbar(20, 3, 1)    #長さ20cm、3人、現在の棒の数1本
puts cutbar(100, 5, 1)   #長さ100cm、5人、現在の棒の数1本