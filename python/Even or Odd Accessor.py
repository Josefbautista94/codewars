class EvenOrOdd:
    def __call__(self, number):
        return 'Even' if number%2==0 else 'Odd'
    
    def __getitem__(self, number):
        return 'Even' if number%2==0 else 'Odd'
        
even_or_odd = EvenOrOdd()