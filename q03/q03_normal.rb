#######################
# 考え方を見なかった解答 #
#######################
cards = []
100.times do
  cards.push(0)
end

is_turned = false
i = 1
j = 2  # めくる間隔
while true
  if cards[i] == 0
    cards[i] = 1
    is_turned = true
  elsif cards[i] == 1
    cards[i] = 0
    is_turned = true
  end

  i += j
  if i >= cards.length
    i = j
    j += 1
    unless is_turned
      break
    end
    is_turned = false
  end
end

100.times do |index|
  if cards[index] == 0
    puts index + 1
  end
end
