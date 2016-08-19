=begin
1000円札を10円玉，50円玉，100円玉，500円玉に両替する時効果の組み合わせは何通りあるか
硬貨の枚数は最大で15枚とする
=end

target = 1000
coins = [500, 100, 50, 10]
max = 15

combination = 0
(0..max).to_a.each do |i|
  coins.repeated_combination(i).to_a.each do |m|
  # total = m.inject(:+)
  #   if total == target
  #     combination += 1
  #   end
    combination += 1 if m.inject(:+) == target
  end
end

puts combination


