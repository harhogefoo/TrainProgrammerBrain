n = gets.to_i % 30

card = [1,2,3,4,5,6]

n.times do |i|
  a = i%5
  b = i%5+1
  card[a], card[b] = card[b], card[a]
end
puts card.join
