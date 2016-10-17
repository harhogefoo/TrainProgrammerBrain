
n = gets.to_i  # 階段の段数
MAX_STEPS = 4  # 一気に進める段数

def move(a_current, b_current)
  puts "a: #{a_current} b: #{b_current}"
  return 0 if b_current < a_current  # b < a になったら終了
  return 1 if a_current == b_current

  count = 0
  (1..MAX_STEPS).each do |da|
    (1..MAX_STEPS).each do |db|
      count += move(a_current + da, b_current - db)
    end
  end
  count
end

a_current, b_current = 0, n
puts move(a_current, b_current)
