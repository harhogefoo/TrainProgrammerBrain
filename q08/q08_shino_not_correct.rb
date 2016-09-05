# 優秀な掃除ロボット
# 前後左右にのみ移動することができる
# 3回移動する場合，最初に後ろに移動する経路パターンは9パターン
# 考えられる移動経路は全部で9 * 4通りの36通り

=begin
不正解のままのソースコード．
=end

action = ["up", "down", "left", "right"]

count = 0
action.repeated_permutation(3) { |pa|
  pos_ary = Array.new
  pos = [[0, 0]]
  pos_ary += pos
  pos = [[0, -1]]
  pos_ary += pos

  is_contained = false

  x = 0
  y = -1
  pa.each do |a|
    if a == "up"
      y += 1
    elsif a == "down"
      y -= 1
    elsif a == "left"
      x -= 1
    else
      x += 1
    end
    p = [x, y]
    if pos_ary.include?(p)
      is_contained = true
      break
    end
    pos_ary += p
  end

  if is_contained
    next
  end

  pos_ary.each do |a|
    print "#{a}\n"
  end
  puts "OK"
  count += 1
}
puts count * 4
