def fib(n)
  dp = Array.new
  dp[0] = 1
  dp[1] = 1
  (n - 2).times do |i|
    dp[i + 2] = dp[i] + dp[i + 1]
  end
  dp
end

count = 0
fib(100).each do |f|
  next if f <= 144
  num_ary = f.to_s.split("").map(&:to_i)
  next if f % num_ary.inject(:+) != 0
  puts f; count += 1
  break if count == 5
end