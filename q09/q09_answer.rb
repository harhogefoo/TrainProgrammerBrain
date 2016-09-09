boy, girl = 20, 10
boy, girl = boy + 1, girl + 1

ary = Array.new(boy * girl){0}
ary[0] = 1
girl.times do |g|
  boy.times do |b|
    if (b != g) and (boy - b != girl - g)
      ary[b + boy * g] += ary[b - 1 + boy * g] if b > 0
      ary[b + boy * g] += ary[b + boy * (g -1)] if g > 0
    end
  end
end


for i in 0...ary.length
  puts "ary[#{i}] = #{ary[i]}"
end

puts ary[-2] + ary[-boy - 1]

# ary[0] = 1
# g = 0, b = 0 do nothing
# g = 0, b = 1
# ary[1] += ary[0]
# g = 0, b = 2
# ary[2] += ary[1]
# ...
# g = 1, b = 0
# ary[21] *= ary[0]
# g = 1, b = 1 through
# g = 1, b = 2
# ary[23] += ary[22]
# ary[23] += ary[2]
