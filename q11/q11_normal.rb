
#個数
@count = 0

def fib(n1, n2)
  if @count >= 5
    return;
  end

  #フィボナッチ数を計算
  n3 = n1 + n2

  #各桁に分割し足す
  str = n3.to_s
  div = 0
  str.each_char do |c|
    div += c.to_s.to_i
  end

  #割り切れたらカウント
  if n3 > 144 and n3 % div == 0
    puts n3
    @count = @count + 1
  end

  #再帰
  fib(n2,n3)
end

#スタートは1, 1
fib(1,1)