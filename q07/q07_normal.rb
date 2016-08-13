# 日付の2進数変換
# 年月日をYYYYMMDDの8桁の整数で表した時
# これを2進数に変換してから逆に並べ，さらに10進数に戻した時，元の日付と同じものに鳴るものを探す
# 期間は前回の東京オリンピック(1964年10月10日)から，次回の東京オリンピック(2020年7月24日)
# 自分で実装

require "date"

start_date = Date.parse("1964-10-10")
end_date = Date.parse("2020-07-24")
for date in start_date..end_date
  # 日付をstr型に変換して10進数に変換
  decimal_int_date = date.strftime("%Y%m%d").to_i
  # 10進数から2進数に変換
  binary_str_date = decimal_int_date.to_s(2)
  # 2進数から10進
  binary_reversed_decimal_str_date = binary_str_date.reverse.to_i(2).to_s
  if binary_reversed_decimal_str_date.length != 8
    next
  end
  if decimal_int_date.to_s == binary_reversed_decimal_str_date
    puts binary_reversed_decimal_str_date
  end
end

# 速いが読みにくいのと拡張性に乏しいことが問題
# 修正する負担が小さい方を考えると最初の実装のほうがいい
