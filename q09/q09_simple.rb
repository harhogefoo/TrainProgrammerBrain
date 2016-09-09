vertical, horizontal = 3, 4
vertical, horizontal = vertical + 1, horizontal + 1

ary = Array.new(vertical * horizontal){0}
ary[0] = 1
horizontal.times do |h|
  vertical.times do |v|
    target = v + vertical * h
    # targetのマスの1つ左のマス
    pre_pos_left = v - 1 + vertical * h
    # targetのマスの1つ下のマス
    pre_pos_bottom = v + vertical * (h -1)
    # 上記のポジションのマスを加算することで，何回通過するかが分かる
    ary[target] += ary[pre_pos] if v > 0
    ary[target] += ary[pre_pos_bottom] if h > 0
  end
end

for i in 0...ary.length
  puts "ary[#{i}] = #{ary[i]}"
end

puts ary[-2] + ary[-vertical - 1]

# ary[0] = 1
# g = 0, b = 0 do nothing
# g = 0, b = 1
# ary[1] += ary[0]
# g = 0, b = 2
# ary[2] += ary[1]
# ...
# g = 1, b = 0
# ary[21] *= ary[0]
# g = 1, b = 1 through
# g = 1, b = 2
# ary[23] += ary[22]
# ary[23] += ary[2]
