# 整数部を含んでだすぞい
n = 2
loop do
  str = Math.sqrt(n).to_s.split("")
  str.delete(".")
  if str.length >= 10
    str = str[0, 10]
    str.uniq!
    break if str.length == 10
  end
  n += 1
end
puts n

# 小数部をだすぞい
n = 2
loop do
  str = Math.sqrt(n).to_s.split(".")
  str = str[1].split("")

  if str.length >= 10
    str = str[0, 10]
    str.uniq!
    break if str.length == 10
  end
  n += 1
end
puts n
