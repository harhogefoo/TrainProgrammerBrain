input = []

4.times do |i|
  input[i] = gets.chomp.to_s
end

4.times do |i|
  puts input.reverse[i].reverse
end


