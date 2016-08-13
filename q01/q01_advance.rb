# 回文数を求めるプログラム(10からスタート)
num = 11
while true
  is_decimal_palindromic = num.to_s == num.to_s.reverse
  is_binary_palindromic = num.to_s(2) == num.to_s(2).reverse
  is_octal_palindromic = num.to_s(8) == num.to_s(8).reverse
  if is_decimal_palindromic and is_binary_palindromic and is_octal_palindromic
    puts num
    break
  end
  num += 2
end
