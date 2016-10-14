# 書きかけ
countries = ["Brazil","Croatia","Mexico","Cameroon","Spain","Netherlands","Chile","Australia","Colombia","Greece","Cote d’Ivoire","Japan","Uruguay","Costa Rica","England","Italy","Switzerland","Ecuador","France","Honduras","Argentina","Bosnia and Herzegovina","Iran","Nigeria","Germany","Portugal","Ghana","USA","Belgium","Algeria","Russia","Korea Republic"]
countries.map { |a| a.downcase! }
countries.sort!
puts "#{countries}"


h_countries = Hash.new(Array.new)
countries.each do |c|
  h_countries[c[0]] += [c]
end

def search (current, array, count)
  is_last = true
  array.each do |a|
    if current[-1] == a[0]
      count += 1
      current = a
      array.delete(a)
      # puts current
      is_last = false
      search(current, array, count)
      puts count
      break
    end
  end
end


max = 0
count = 0
countries.each do |c|
  ary = Array.new(countries)
  ary.delete(c)
  search(c, ary, 1)
end
puts count


