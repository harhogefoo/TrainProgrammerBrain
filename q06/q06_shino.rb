def check_num(n, m)
  while true
    if m % 2 == 0
      m = m / 2
    else
      m = m * 3 + 1
    end

    if n == m
      return 1
    end
    if m == 1
      return 0
    end
  end
end

count = 0
2.step(10000, 2) do |n|
  count = count + check_num(n, n*3+1)
end
puts count
