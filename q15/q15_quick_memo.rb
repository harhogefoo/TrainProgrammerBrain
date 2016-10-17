
n = gets.to_i  # 階段の段数
STEP = 4       # 一気に進める段数

@memo = Hash.new

def move(a_current, b_current)
  # puts "a: #{a_current} b: #{b_current}"
  # puts @memo
  return @memo[[a_current, b_current]] if @memo.has_key?([a_current, b_current])
  return @memo[[a_current, b_current]] = 0 if b_current < a_current  # b < a になったら終了
  return @memo[[a_current, b_current]] = 1 if a_current == b_current

  count = 0
  (1..STEP).each do |da|
    (1..STEP).each do |db|
      count += move(a_current + da, b_current - db)
    end
  end
  @memo[[a_current, b_current]] = count
end

a_current, b_current = 0, n
puts move(a_current, b_current)
