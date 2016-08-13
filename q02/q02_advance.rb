# 数列の四則演算
# 1000 ~ 9999 の間で
# 各桁の四則演算を行い
# 元の数の桁を逆から並べた数字になるもの

# str = 1000.to_s
# str[0]: 1
# str[1]: 0
# str[2]: 0
# str[3]: 0
# + or - or / をすると逆から並べた数値にならない
op = ['*', '']  # 空白を用意するのもポイント
for i in 1000..9999
  str = i.to_s
  # 末尾が0の場合はスキップ
  # 末尾が0 = 先頭が0になる数値
  if str[3] == '0'
    next
  end

  op.each do |o1|
    # eval("1*0*08")はRubyでは8進数として認識してしまうため
    # 回避する実装が必要
    if str[3] == '0' && o1 == ''
      next
    end
    op.each do |o2|
      if str[2] == '0' && o2 == ''
        next
      end
      op.each do |o3|
        if str[1] == '0' && o3 == ''
          next
        end
        val = str[3] + o1 + str[2] + o2 + str[1] + o3 + str[0]
        if val.length > 4  # 演算子は必ず1つ以上
          begin
            if i == eval(val)
              puts "#{val}  =  + #{i}"
              break
            end
          rescue ZeroDivisionError
            next
          end
        end
      end
    end
  end
end
