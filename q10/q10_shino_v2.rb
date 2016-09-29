# http://pythonista.hateblo.jp/entry/A010
# Ruby版
EUROPEAN = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
AMERICAN = [0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1,00,27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2]

def sum_european(m, n)
  sum = 0
  (m...m+n).to_a.each do |s|
    s -= 37 if s >= 37
    sum += EUROPEAN[s]
  end
  sum
end

def max_european(n)
  max_sum = 0
  (0..37).to_a.each do |m|
    sum = sum_european(m, n)
    max_sum = sum if max_sum < sum
  end
  max_sum
end

def sum_american(m, n)
  sum = 0
  (m...m+n).to_a.each do |s|
    s -= 38 if s >= 38
    sum += AMERICAN[s]
  end
  sum
end

def max_american(n)
  max_sum = 0
  (0..38).to_a.each do |m|
    sum = sum_american(m, n)
    max_sum = sum if max_sum < sum
  end
  max_sum
end

count = 0
(2..36).to_a.each do |n|
  count += 1 if max_european(n) < max_american(n)
end
puts count
