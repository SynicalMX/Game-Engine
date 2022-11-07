function fib(n)
  if n <= 1 then return n end
  return fib(n - 1) + fib(n - 2)
end
print("Hi world!")
print('Counting...')
for i = 1, 11 do
	print(i)
end
print('Done counting\n')

fib10 = fib(10)
print('Fibonacci of 10 is: ' .. tostring(fib10) .. "\n")

print('Printing things')
print(1 + 1)
print(nil)
print(2.2)
print("Hello ".."World")