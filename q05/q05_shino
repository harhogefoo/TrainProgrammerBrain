=begin
1000円札を10円玉，50円玉，100円玉，500円玉に両替する時効果の組み合わせは何通りあるか
硬貨の枚数は最大で15枚とする
=end

target = 1000
coins = [500, 100, 50, 10]
limits = []

coins.each do |c|
  limit = target / c
  limits.push(limit)
end
puts limits

combination = 0
(0..limits[0]).to_a.each do |i|
  (0..limits[1]).to_a.each do |j|
    (0..limits[2]).to_a.each do |k|
      (0..limits[3]).to_a.each do |l|
        if (i + j + k + l) > 15
          next
        end

        total = (coins[0] * i) + (coins[1] * j) + (coins[2] * k) + (coins[3] * l)
        if total != target
          next
        end
        combination += 1
        # print("#{coins[0]} * #{i}, #{coins[1]} * #{j}, #{coins[2]} * #{k}, #{coins[3]} * #{l}\n")
      end
    end
  end
end

puts combination

